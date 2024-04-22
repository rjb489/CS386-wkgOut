
/*
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

/*

const express = require('express');
const app = express();

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Incoming ${req.method} request from ${req.ip} to ${req.originalUrl}`);
    next();
});

// Define a route to handle GET requests
app.get('/home/dev/sql-server/node_modules', (req, res) => {
    // Respond with a JSON object
    res.json({ message: 'Hello from the server!' });
});

// Start the server and listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

*/


/*
const mysql = require('mysql');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
    host: '23.254.211.151',
    user: 'dbuser',
    password: 'MyPaSSworD587@',
    database: 'workout_planner_system',
    port: '5231'
});

// Attempt to connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL server:', err);
        return;
    }
    console.log('Connected to MySQL server');
    
    // If connection is successful, perform a test query
    connection.query('SELECT 1 + 1 AS result', (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return;
        }
        console.log('Result of test query:', results[0].result);
        
        // Close the connection after the test query
        connection.end();
    });
});

*/

// reqest for the login page
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// this was added for https
const https = require('https');
const fs = require('fs');

const app = express();
const PORT = 3000;


// Load SSL/TLS certificate and key
const options = {
    key: fs.readFileSync('/home/dev/example_com.key'), // Replace with the path to your private key file
    ca: fs.readFileSync('/home/dev/sql-server/sendingout/weebworkout_com.ca-bundle'), // Replace with the path to your CA certificate file
    cert: fs.readFileSync('/home/dev/sql-server/sendingout/weebworkout_com.crt') // Replace with the path to your SSL/TLS certificate file
  };

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all origins
app.use(cors());

/*

POST: /createAccount
DESCRIPTION: will recive info at /createAccount for username and password
Will also call createAccount and fill in info to the mySql database
Dependensies: createAccount


*/

// POST endpoint to receive data from client
app.post('/createAccount', (req,res) => {

    const receivedData = req.body;
    console.log('Received data from client:', receivedData);
    
    console.log('This is the username:',receivedData.username);

    // now we will send this data to a create accountgit
    createAccount(receivedData.username,receivedData.password,res);

    // Send back a response to the client
    //res.json({ message: 'Data received successfully' });
});

/*

POST: /authoricate
DESCRIPTION: will recive info at /authoricate and send back if that
information if it is true, information is username and password


*/

// POST endpoint to receive data from client
app.post('/authoricate', (req,res) => {

    const receivedData = req.body;
    console.log('Received data from client:', receivedData);
    
    console.log('This is the username:',receivedData.username);

    // now we will send this data to a create account
    authoricateAccount(receivedData.username,receivedData.password,res);

    // Send back a response to the client
    //res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/*

Function: authoricateAccount
DESCRIPTION: Will connect to the mysql database and see if
username and password are in


*/

function authoricateAccount(username,password,res)
{
    const mysql = require('mysql');

    // Create a connection to the MySQL server
    const connection = mysql.createConnection({
        host: '23.254.211.151',
        user: 'dbuser',
        password: 'MyPaSSworD587@',
        database: 'workout_planner_system',
        port: '5231'
    });

    
    // Attempt to connect to the MySQL server
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL server:', err);
            return;
        }
        console.log('Connected to MySQL server');

        //const userData = { username, password, };
        
        // If connection is successful, perform a creation of a user
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                res.status(500).json({ success: false, message: 'Error executing query' });
                connection.end();
                return;
            }
            
            if (results.length > 0) {
                console.log('User exists and credentials are valid');
                res.status(200).json({ success: true, message: 'User exists and credentials are valid' });
            } else {
                console.log('User does not exist or credentials are invalid');
                res.status(200).json({ success: false, message: 'User does not exist or credentials are invalid' });
            }

            connection.end();
        });
    });
}


/*

Function: createAccount
DESCRIPTION: Will connect to the mysql database then fill in
an entered username and password


*/

function createAccount(username,password,res)
{
    const mysql = require('mysql');

    // Create a connection to the MySQL server
    const connection = mysql.createConnection({
        host: '23.254.211.151',
        user: 'dbuser',
        password: 'MyPaSSworD587@',
        database: 'workout_planner_system',
        port: '5231'
    });

    
    // Attempt to connect to the MySQL server
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL server:', err);
            return;
        }
        console.log('Connected to MySQL server');

        const userData = { username, password, };
        
        // If connection is successful, perform a creation of a user
        connection.query('INSERT INTO users SET ?', userData, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                return;
            }
            console.log('User inserted successfully');

            console.log('User exists and credentials are valid');
            res.status(200).json({ success: true, message: 'User exists and credentials are valid' });
            
            // Close the connection to the user
            connection.end();
        });
    });
 }