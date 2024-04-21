const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the .well-known/pki-validation/ directory
app.use('/.well-known/pki-validation', express.static(path.join('/home/dev/.well-known/pki-validation')));

// Serve the index page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define the hostname and port
const hostname = '23.254.211.151'; // Change this to your domain
const port = 3000; // You can change the port if needed

// Create the HTTP server
const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
});