/*

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







const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');


const app = express();


// Serve static files from the .well-known/pki-validation/ directory
app.use('/.well-known/pki-validation', express.static(path.join(__dirname, '.well-known/pki-validation')));

// Serve the index page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

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

*/


// -----------------------------------------------  //

const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all origins
app.use(cors());


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


// Create a session to store when a user logs in

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const mysql = require('mysql');

// MySQL connection configuration
const dbConfig = {
  host: '23.254.211.151',
  user: 'dbuser',
  password: 'MyPaSSworD587@',
  database: 'workout_planner_system',
  port: '5231'
};

// Create a MySQLStore instance with the database connection options
const sessionStore = new MySQLStore(dbConfig);

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
  authoricateAccount(receivedData.username,receivedData.password,res,req);

  // Send back a response to the client
  //res.json({ message: 'Data received successfully' });
});



/*

Function: authoricateAccount
DESCRIPTION: Will connect to the mysql database and see if
username and password are in


*/

function authoricateAccount(username,password,res,req)
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

              // we need to store information in the sessions/
              req.session.sessionId = req.sessionID;
              req.session.userData = results[0]; 


              // log to see if session was created properly
              console.log('Session created:', req.session);

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
