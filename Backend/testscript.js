/*

const express = require('express');
const app = express();
const PORT = 3000; // Change the port number if needed

// Define routes for both URLs
app.get('/.well-known/pki-validation/01CCA14D579FD35426C30CAECF255284.txt', (req, res) => {
    // Serve the file for http://weebworkout.com/.well-known/pki-validation/01CCA14D579FD35426C30CAECF255284.txt
    res.sendFile('/.well-known/pki-validation/01CCA14D579FD35426C30CAECF255284.txt'); // Replace '/path/to/your/file.txt' with the actual path to your file
});

app.get('/.well-known/pki-validation/01CCA14D579FD35426C30CAECF255284.txt', (req, res) => {
    // Serve the file for http://www.weebworkout.com/.well-known/pki-validation/01CCA14D579FD35426C30CAECF255284.txt
    res.sendFile('/.well-known/pki-validation/01CCA14D579FD35426C30CAECF255284.txt'); // Replace '/path/to/your/file.txt' with the actual path to your file
});
 Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//

*/

/*
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'www.weebworkout.com';
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  // If the request is for the validation file, serve it
  if (url.startsWith('/.well-known/pki-validation')) {
    const filePath = path.join(__dirname, url);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('File not found');
      } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);
      }
    });
  } else {
    // For other requests, serve a default response
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/
const express = require('express');
const https = require('https');
const fs = require('fs');

// Create an Express application
const app = express();

// Middleware to handle HTTPS requests
app.get('/', (req, res) => {
  res.send('Hello, HTTPS World!');
});

// Path to SSL certificate and key files
const sslOptions = {
  key: fs.readFileSync('/home/dev/.well-known/01CCA14D579FD35426C30CAECF255284.txt'),
  cert: fs.readFileSync('/home/dev/.well-known/pki-validation/01CCA14D579FD35426C30CAECF255284.txt')
};

// Create an HTTPS server with Express app
const server = https.createServer(sslOptions, app);

// Define the port for the HTTPS server
const port = 443; // Default port for HTTPS

// Start the HTTPS server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});