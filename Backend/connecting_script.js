
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

const app = express();
const PORT = 3000;

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
app.post('/createAccount', (req, res) => {

    const receivedData = req.body;
    console.log('Received data from client:', receivedData);
    
    console.log('This is the username:',receivedData.username);

    // now we will send this data to a create account
    createAccount(receivedData.username,receivedData.password);

    // Send back a response to the client
    res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


/*

Function: createAccount
DESCRIPTION: Will connect to the mysql database then fill in
an entered username and password


*/

function createAccount(username,password)
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
            
            // Close the connection to the user
            connection.end();
        });
    });
 }