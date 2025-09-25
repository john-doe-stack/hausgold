// server/seed-properties.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(__dirname, '../hausgold.db');
const db = new sqlite3.Database(dbPath);

const sampleProperties = [
  {
    title: "Charmantes Stadthaus in Berlin Prenzlauer Berg",
    type: "buy",
    price: 550000,
    description: "Ein bezauberndes Stadthaus im Herzen von Prenzlauer Berg. 150 m² mit 4 Schlafzimmern, Balkon, lichtdurchfluteter Wohnraum und moderner Küche.",
    image_url: "https://images.unsplash.com/photo-1575516882755-922426392347?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    user_id: 1,
    location: "Berlin, Prenzlauer Berg"
  },
  {
    title: "Luxuriöse Villa am Tegernsee, Bayern",
    type: "buy",
    price: 3200000,
    description: "Exquisite Villa direkt am Tegernsee mit privatem Steg, großem Garten und Bergblick. 6 Schlafzimmer, Pool, Spa-Bereich.",
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    user_id: 2,
    location: "Tegernsee, Bayern"
  },
  {
    title: "Gemütliche Doppelhaushälfte in Hamburg Harvestehude",
    type: "rent",
    price: 3200,
    description: "Schöne Doppelhaushälfte in sehr gefragter Lage von Harvestehude. Lichtdurchflutet, Garten, hochwertig saniert.",
    image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667243/897bffb4d441787c584116ff3eb21b3c-uncropped_scaled_within_1536_1152_ssshkh.webp",
    user_id: 3,
    location: "Hamburg Harvestehude"
  },
  {
    title: "Familienhaus in Frankfurt Westend",
    type: "buy",
    price: 1450000,
    description: "Elegant ausgestattetes Familienhaus im Westend. 5 Schlafzimmer, große Fensterfront, Garten und Garage.",
    image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    user_id: 4,
    location: "Frankfurt Westend"
  },
  {
    title: "Modernes Reihenhaus in Köln Ehrenfeld",
    type: "rent",
    price: 2650,
    description: "Stylisches Reihenhaus im kreativen Viertel Ehrenfeld. Offener Wohn-/Essbereich, Dachterrasse, moderne Ausstattung.",
    image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667243/3ef93a63d73c0f08b5bdb2a457c9d927-uncropped_scaled_within_1536_1152_j9l1eo.webp",
    user_id: 5,
    location: "Köln Ehrenfeld"
  },
  {
    title: "Historische Villa in Dresden Blasewitz",
    type: "buy",
    price: 950000,
    description: "Charmante Altbau-Villa mit Stuck, hohen Decken, Garten und Blick zur Elbe. Vollständig restauriert.",
    image_url: "https://images.unsplash.com/photo-1591869815554-934989223843?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    user_id: 6,
    location: "Dresden Blasewitz"
  },
  {
    title: "Penthouse mit Blick über Stuttgart",
    type: "buy",
    price: 1250000,
    description: "Luxus-Penthouse mit großer Dachterrasse, Panoramablick, offener Wohnküche und Designfinish.",
    image_url: "https://images.unsplash.com/photo-1575516882755-922426392347?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    user_id: 7,
    location: "Stuttgart Mitte"
  },
  {
    title: "Landhaus bei Heidelberg",
    type: "buy",
    price: 850000,
    description: "Idyllisches Landhaus mit viel Natur, Garten, Terrasse und Platz für Familie und Gäste.",
    image_url: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    user_id: 8,
    location: "Umgebung Heidelberg"
  },
  {
    title: "Stilvolles Loft in Leipzig Südvorstadt",
    type: "rent",
    price: 2000,
    description: "Großzügiges Loft mit Industriecharme, offenen Räumen, hohen Decken und exzellenter Verkehrsanbindung.",
    image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667249/d0080fdd6ba18904a22c75b2d2ee5f24-uncropped_scaled_within_1536_1152_xzjicy.webp",
    user_id: 9,
    location: "Leipzig Südvorstadt"
  },
  {
    title: "Wasserblick Villa in Hamburg Othmarschen",
    type: "buy",
    price: 2400000,
    description: "Elegante Villa direkt an der Elbe mit großem Garten, Bootsanleger und hohen Decken.",
    image_url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbGxhfGVufDB8fDB8fHww",
    user_id: 10,
    location: "Hamburg Othmarschen"
  },
  {
    title: "Stadthaus Düsseldorf Oberkassel",
    type: "buy",
    price: 950000,
    description: "Modernes Stadthaus in Oberkassel. Stilvolle Ausstattung, Garten, Garage und smarte Haustechnik.",
    image_url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    user_id: 11,
    location: "Düsseldorf Oberkassel"
  },
  {
    title: "Romantisches Cottage im Schwarzwald",
    type: "buy",
    price: 580000,
    description: "Malerisches Cottage inmitten des Schwarzwaldes mit sichtbaren Holzbalken, Kamin und Natur pur.",
    image_url: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    user_id: 12,
    location: "Schwarzwald"
  },
  {
    title: "Design-Apartment in Berlin Charlottenburg",
    type: "rent",
    price: 2700,
    description: "Hochwertiges Apartment mit Designerinterieur, Concierge Service, Balkon und Blick ins Grüne.",
    image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667243/2677be5041b405d016cfe22bc63c7917-uncropped_scaled_within_1536_1152_tt0inj.webp",
    user_id: 13,
    location: "Berlin Charlottenburg"
  },
  {
    title: "Moderne Villa mit Pool in München",
    type: "buy",
    price: 2800000,
    description: "Zeitgenössische Villa mit Infinity Pool, Heimkino und Smart Home Technologie nahe München.",
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    user_id: 14,
    location: "München Solln"
  },
  {
    title: "Studio in Hamburg City Center",
    type: "rent",
    price: 1500,
    description: "Kompaktes Studio mitten in der City von Hamburg. Ideal für Singles oder Pendler, modern eingerichtet.",
    image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667245/a7e9521063afb1f8b2a2e3914338e5f9-uncropped_scaled_within_1536_1152_h996zy.webp",
    user_id: 15,
    location: "Hamburg Mitte"
  },
  {
    title: "Bauernhaus in Thüringen",
    type: "buy",
    price: 650000,
    description: "Rustikales Bauernhaus in Thüringen mit großem Grundstück, Stallungen und viel historischen Charme.",
    image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    user_id: 16,
    location: "Thüringen ländlich"
  },
  {
    title: "Altbauwohnung in Nürnberg Altstadt",
    type: "rent",
    price: 1800,
    description: "Charmante Altbauwohnung inmitten der Nürnberger Altstadt. Hohe Decken, Parkett, Balkonblick.",
    image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667244/75f8e716d67dae145e2f100de33be766-uncropped_scaled_within_1536_1152_dikyya.webp",
    user_id: 17,
    location: "Nürnberg Altstadt"
  },
  {
    title: "Schlossähnliches Herrenhaus in Sachsen",
    type: "buy",
    price: 1200000,
    description: "Prächtiges Herrenhaus mit Säulenportal, hohen Fenstern und großem Parkgrundstück in Sachsen.",
    image_url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
    user_id: 18,
    location: "Sachsen Land"
  },
  {
    title: "Familienvilla in Bonn Bad Godesberg",
    type: "buy",
    price: 980000,
    description: "Stilvolle Familienvilla in Bad Godesberg, Bonn. Garten, Terrasse, hochwertige Ausstattung und Garage.",
    image_url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhfGVufDB8fDB8fHww",
    user_id: 19,
    location: "Bonn Bad Godesberg"
  },
  {
    title: "Stadtblick Penthouse in Frankfurt Sachsenhausen",
    type: "rent",
    price: 3200,
    description: "Penthouse mit Dachterrasse und Blick auf den Mainufer-Panorama, modernes Design und offene Raumaufteilung.",
    image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667246/c8b4f86bc5805f7ab4e9635d173de61e-uncropped_scaled_within_1536_1152_i04wu5.webp",
    user_id: 20,
    location: "Frankfurt Sachsenhausen"
  }
];

// Promisify db.run for sequential execution
function dbRun(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
}

async function seedDatabase() {
  try {
    // Check if properties already exist
    const countStmt = await new Promise((resolve, reject) => {
      db.get("SELECT COUNT(*) as count FROM properties", (err, row) => {
        if (err) reject(err);
        else resolve(row.count);
      });
    });

    if (countStmt > 0) {
      console.log("PropertyParams already exist. Skipping seed.");
      return;
    }

    // Insert sample users (if not exists)
    await dbRun(`
      INSERT OR IGNORE INTO users (name, email, password_hash) VALUES 
      ('Thomas Schmidt', 'thomas@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Michael Wagner', 'michael@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Andreas Becker', 'andreas@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Markus Hoffmann', 'markus@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Christian Schulz', 'christian@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Daniel Meyer', 'daniel@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Stefan Weber', 'stefan@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Alexander Klein', 'alexander@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Matthias Braun', 'matthias@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Jan Fischer', 'jan@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Sarah Becker', 'sarah@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Lisa Wagner', 'lisa@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Anna Schmidt', 'anna@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Julia Hoffmann', 'julia@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Maria Klein', 'maria@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Sophie Braun', 'sophie@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Emma Schulz', 'emma@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Hannah Meyer', 'hannah@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Laura Weber', 'laura@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
      ('Leonie Fischer', 'leonie@hausgold.de', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi')
    `);

    // Clear existing properties (just in case)
    await dbRun(`DELETE FROM properties`);

    // Insert properties one by one
    for (const property of sampleProperties) {
      await dbRun(
        `INSERT INTO properties (title, type, price, description, image_url, user_id, location) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [property.title.trim(), property.type, property.price, property.description.trim(), property.image_url.trim(), property.user_id, property.location.trim()]
      );
      console.log('✅ Inserted:', property.title);
    }

    // Final count check
    const finalCount = await new Promise((resolve, reject) => {
      db.get("SELECT COUNT(*) as count FROM properties", (err, row) => {
        if (err) reject(err);
        else resolve(row.count);
      });
    });
    console.log(`🎉 Successfully seeded database with ${finalCount} German sample properties!`);

  } catch (err) {
    console.error('❌ Fatal error during seeding:', err.message);
    process.exit(1);
  } finally {
    db.close((err) => {
      if (err) {
        console.error('Error closing database:', err.message);
      } else {
        console.log('🔒 Database connection closed');
      }
    });
  }
}

// Run the seeder
seedDatabase();