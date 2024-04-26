const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const mysql = require('mysql');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all origins
app.use(cors({ origin: '*' }));

// Define the hostname and port
const hostname = '23.254.211.151'; // Change this to your domain
const port = 3000; // Default port for HTTPS

// Load SSL/TLS certificate and key
const options = {
  key: fs.readFileSync('/home/dev/example_com.key'), // Replace with the path to your private key file
  ca: fs.readFileSync('/home/dev/sql-server/sendingout/weebworkout_com.ca-bundle'), // Replace with the path to your CA certificate file
  cert: fs.readFileSync('/home/dev/sql-server/sendingout/weebworkout_com.crt') // Replace with the path to your SSL/TLS certificate file
};

// Create the HTTPS server
const server = https.createServer(options, app);

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
  });
  
// Handle server errors
server.on('error', (error) => {
    console.error('Server error:', error);
  });

// Create a MySQLStore instance with the database connection options
const dbConfig = {
  host: '23.254.211.151',
  user: 'dbuser',
  password: 'MyPaSSworD587@',
  database: 'workout_planner_system',
  port: '5231'
};
const sessionStore = new MySQLStore(dbConfig);

// Create a connection pool
const pool = mysql.createPool(dbConfig);

//create a random key for secret
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
console.log('Random Secret Key:', secretKey);

// Configure session middleware with the MySQL session store
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: { maxAge: 600000 } // 10 minutes in milliseconds
}));


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
    authenticateAccount(receivedData.username,receivedData.password,res,req, (auth) => {
        if(auth)
           {
             // redirect
             res.redirect('https://main.d3sgq1csnkubqp.amplifyapp.com/index.html');
            }
         else
            {
             //res.status(401).json({ success: false, message: 'Authentication failed' });
             res.status(401).json({ success: false, message: 'Authentication failed' });
            }
    });

    // Send back a response to the client
    //res.json({ message: 'Data received successfully' });
  });
  
  /*
  GET request for session data /getSessionData
  */
  
  
  
  /*
  
  Function: authoricateAccount
  DESCRIPTION: Will connect to the mysql database and see if
  username and password are in
  
  
  */
  
  function authenticateAccount(username, password, res, req, callback) 
   {
    // Attempt to acquire a connection from the pool
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error acquiring database connection:', err);
            //res.status(500).json({ success: false, message: 'Database error' });
            callback(false);
            return;
        }

        // If connection is successful, perform authentication
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results) => {
            // Release the connection back to the pool
            connection.release();

            if (error) {
                console.error('Error executing query:', error);
                //res.status(500).json({ success: false, message: 'Error executing query' });
                callback(false);
                return;
            }

            if (results.length > 0) {
                console.log('User exists and credentials are valid');

                // Store user data in session
                req.session.sessionId = req.sessionID;
                req.session.userData = results[0];

                // Log session creation
                console.log('Session created:', req.session);

                //res.status(200).json({ success: true, message: 'User exists and credentials are valid' });

                callback(true);
            } else {
                console.log('User does not exist or credentials are invalid');
                //res.status(200).json({ success: false, message: 'User does not exist or credentials are invalid' });
                callback(false);
            }
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
  