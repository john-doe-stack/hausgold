// server/start.js
const { spawn } = require('child_process');
const path = require('path');

console.log('🌱 Seeding database...');
const seed = spawn('node', ['server/seed-properties.js'], {
  stdio: 'inherit',
  cwd: path.resolve(__dirname, '..')
});

seed.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Seeding complete. Starting server...');
    require('./server.js');
  } else {
    console.error('❌ Seeding failed. Exiting.');
    process.exit(1);
  }
});