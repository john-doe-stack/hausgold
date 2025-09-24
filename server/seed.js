// server/seed.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./hausgold.db');

// Clear existing properties first
db.run(`DELETE FROM properties`);

const sampleProperties = [
  {
    title: "Modern Apartment in Berlin",
    type: "rent",
    price: 1200,
    description: "Bright 2-bedroom apartment near Mitte.",
    image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667245/a7e9521063afb1f8b2a2e3914338e5f9-uncropped_scaled_within_1536_1152_h996zy.webp",
    user_id: 1,
    location: "Berlin Mitte"
  },
  {
    title: "Luxury Villa in Munich",
    type: "buy",
    price: 850000,
    description: "Stunning 5-bedroom villa with garden.",
    image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667245/a7e9521063afb1f8b2a2e3914338e5f9-uncropped_scaled_within_1536_1152_h996zy.webp",
    user_id: 1,
    location: "Munich"
  }
];

sampleProperties.forEach(prop => {
  db.run(
    `INSERT INTO properties (title, type, price, description, image_url, user_id, location) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [prop.title, prop.type, prop.price, prop.description, prop.image_url, prop.user_id, prop.location],
    function(err) {
      if (err) {
        console.error("Error inserting property:", err.message);
      } else {
        console.log(`✅ Inserted: ${prop.title}`);
      }
    }
  );
});

db.close(() => console.log("🔒 DB closed"));