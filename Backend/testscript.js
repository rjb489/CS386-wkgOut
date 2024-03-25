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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});