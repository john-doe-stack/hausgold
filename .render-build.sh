#!/usr/bin/env bash
# .render-build.sh
# Exit if any command fails
set -o errexit  

# Install server dependencies
npm install

# Install client dependencies and build React app
cd client
npm install
npm run build
cd ..

# Run DB setup + seed
npm run setup
npm run seed
