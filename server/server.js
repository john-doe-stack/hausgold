// Add this at the top of server/server.js
require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 10000; // Render uses 10000 by default
const JWT_SECRET = process.env.JWT_SECRET || 'hausgold-secret-2025';

// ✅ Allow frontend origin (Vercel + localhost)
const corsOptions = {
  origin: [
    'http://localhost:3001', // your local React dev port
    'https://hausgold-frontend.onrender.com',
    /\.onrender\.com$/ // allows all Render preview URLs
  ],
  credentials: true
};
app.use(cors(corsOptions));

// ✅ Updated CSP: Allow Unsplash + Cloudinary
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": [
          "'self'",
          "data:",
          "https://via.placeholder.com",
          "https://images.unsplash.com",
          "https://res.cloudinary.com",
          "https://*.cloudinary.com"
        ],
        // Allow connections to backend
        "connect-src": [
          "'self'",
          "http://localhost:3001",
          "https://hausgold.vercel.app",
          "https://hausgold-backend.onrender.com"
        ],
      },
    },
  })
);

app.use(cors(corsOptions)); // ✅ Enable CORS
app.use(morgan('dev'));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads'))); // ✅ Absolute path

// ... rest of your code remains the same ...

// Database
const dbPath = path.join(__dirname, '../hausgold.db');
const db = new sqlite3.Database(dbPath);

// Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// File Upload Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png/i;
    if (!allowed.test(file.mimetype)) {
      return cb(new Error('Only JPEG/PNG allowed'), false);
    }
    cb(null, true);
  }
});

// ========== ROUTES ==========

// AUTH
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    db.run(
      `INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)`,
      [name, email, hashed],
      function(err) {
        if (err) {
          if (err.message.includes('UNIQUE')) {
            return res.status(400).json({ error: 'Email already exists' });
          }
          return res.status(500).json({ error: err.message });
        }
        const token = jwt.sign({ id: this.lastID, email }, JWT_SECRET);
        res.status(201).json({ token, userId: this.lastID });
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
    if (err || !user) return res.status(400).json({ error: 'Invalid credentials' });
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(400).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);
    res.json({ token, userId: user.id });
  });
});

app.post('/api/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

// PROPERTIES
app.get('/api/properties', (req, res) => {
  let query = `SELECT p.*, u.name as owner_name FROM properties p JOIN users u ON p.user_id = u.id`;
  const params = [];
  const { type, minPrice, maxPrice, location } = req.query;

  if (type) {
    query += ` WHERE p.type = ?`;
    params.push(type);
  }
  if (minPrice) {
    query += (params.length ? ' AND' : ' WHERE') + ` p.price >= ?`;
    params.push(minPrice);
  }
  if (maxPrice) {
    query += (params.length ? ' AND' : ' WHERE') + ` p.price <= ?`;
    params.push(maxPrice);
  }
  if (location) {
    query += (params.length ? ' AND' : ' WHERE') + ` p.location LIKE ?`;
    params.push(`%${location}%`);
  }

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/properties', authenticateToken, upload.single('image'), (req, res) => {
  const { title, type, price, description, location } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  db.run(
    `INSERT INTO properties (title, type, price, description, image_url, user_id, location) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [title, type, price, description, imageUrl, req.user.id, location],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, imageUrl });
    }
  );
});

// FAVORITES
app.post('/api/favorites', authenticateToken, (req, res) => {
  const { propertyId } = req.body;
  const userId = req.user.id;

  db.get(`SELECT id FROM favorites WHERE user_id = ? AND property_id = ?`, [userId, propertyId], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (row) {
      db.run(`DELETE FROM favorites WHERE id = ?`, [row.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ removed: true });
      });
    } else {
      db.run(`INSERT INTO favorites (user_id, property_id) VALUES (?, ?)`, [userId, propertyId], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ added: true, id: this.lastID });
      });
    }
  });
});

app.get('/api/favorites', authenticateToken, (req, res) => {
  const userId = req.user.id;
  db.all(`
    SELECT p.*, u.name as owner_name
    FROM favorites f
    JOIN properties p ON f.property_id = p.id
    JOIN users u ON p.user_id = u.id
    WHERE f.user_id = ?
  `, [userId], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// MESSAGES
app.post('/api/messages', authenticateToken, (req, res) => {
  const { toUserId, content } = req.body;
  const fromUserId = req.user.id;

  db.run(
    `INSERT INTO messages (from_user_id, to_user_id, content) VALUES (?, ?, ?)`,
    [fromUserId, toUserId, content],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID });
    }
  );
});



// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Hausgold Server running on http://localhost:${PORT}`);
});