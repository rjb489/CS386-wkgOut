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

// need to use middleware to extract session id from reqest
// handlers
app.use((req, res, next) => {
    const sessionId = req.headers.authorization;
    if (sessionId) {
        req.sessionId = sessionId;
    }
    next();
});


/*
GET: /data
DESCRIPTION: used to fetch user specific data
*/
app.get('/data', (req, res) => {
    const sessionId = req.sessionId;

    console.log('Received data from client:', sessionId);
      // now we will send this data to get data 
      getUserData(sessionId, (auth, userData) => {
        if (auth) {
            // Send session ID and success message in the response
            res.status(200).json({ success: true, userData: userData });
        } else {
            // Send authentication failure message in the response
            res.status(401).json({ success: false, message: 'Authentication failed' });
        }
    });
});


/*
POST: /setExersise
DESCRIPTION: used to fetch user specific data
*/
app.post('/setExersise', (req, res) => {

    // extract the information from exersies
    const { name, reps, sets, weekday, sessionID } = req.body;

    console.log('Exercise data:', { name, reps, sets, weekday });
    console.log('Session ID:', sessionID);

    setExersise({ name, reps, sets, weekday }, sessionID);

    res.json({ message: 'Exercise data received successfully' });
});


/*

GET: /workouts
DESCRIPTION: used to fetch user specific workouts

*/
app.get('/workouts', (req, res) => {

    // I also need to figure out a call to get the day of the week

    const sessionId = req.query.sessionId;
    const dayOfWeek = req.query.dayOfWeek;

    console.log('Received data from client:', sessionId);
    
    // call getWorkouts this will get workouts
    getWorkouts(sessionId,dayOfWeek, (workouts, error) => {

        if(error)
           {
            console.error('Error fetching workouts:', error);
            res.status(500).json({ success: false, message: 'Error fetching workouts' });
            return;
           }
        
        
        console.log('Workouts fetched successfully:', workouts);
        res.status(200).json({ success: true, workouts: workouts });
        

    });

});



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
  authoricate
  
  */
  
  // POST endpoint to receive data from client
  app.post('/authoricate', (req, res) => {
      const receivedData = req.body;
      console.log('Received data from client:', receivedData);
      console.log('This is the username:', receivedData.username);

      // now we will send this data to create an account
      authenticateAccount(receivedData.username, receivedData.password, res, req, (auth, sessionId) => {
          if (auth) {
              // Send session ID and success message in the response
              res.status(200).json({ success: true, sessionId: sessionId });
          } else {
              // Send authentication failure message in the response
              res.status(401).json({ success: false, message: 'Authentication failed' });
          }
      });
   });
  

  
  
  
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
            callback(false,null);
            return;
        }

        // If connection is successful, perform authentication
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results) => {
            // Release the connection back to the pool
            connection.release();

            if (error) {
                console.error('Error executing query:', error);
                //res.status(500).json({ success: false, message: 'Error executing query' });
                callback(false,null);
                return;
            }

            if (results.length > 0) {
                console.log('User exists and credentials are valid');

                // Store user data in session
                req.session.sessionId = req.sessionID;
                req.session.userData = {
                    username: results[0].username, 
                    admin: results[0].admin,
                    experience: results[0].experience
                };

                // Log session creation
                console.log('Session created:', req.session);

                //res.status(200).json({ success: true, message: 'User exists and credentials are valid' });

                callback(true, req.sessionID);
            } else {
                console.log('User does not exist or credentials are invalid');
                //res.status(200).json({ success: false, message: 'User does not exist or credentials are invalid' });
                callback(false,null);
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

  /*
  
  Function: getUserData(sessionID)
  DESCRIPTION: will get the users data reling on there sessionID
  
  
  */
  function getUserData(sessionId, callback)
   {
    const sqlQuery = `
    SELECT * FROM users 
    WHERE username = (
        SELECT SUBSTRING_INDEX(SUBSTRING_INDEX(data, '"username":"', -1), '"', 1) AS username 
        FROM sessions 
        WHERE session_id = ?
    )`;
    // Attempt to acquire a connection from the pool
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error acquiring database connection:', err);
            callback(false,null);
            return;
        }



        // If connection is successful, perform authentication
        connection.query(sqlQuery, [sessionId], (error, results) => {
            // Release the connection back to the pool
            connection.release();

            if (error) {
                console.error('Error executing query:', error);
                callback(false,null);
                return;
            }

            if (results.length > 0) {
                console.log('User sucussfuly found');

                // Store user data in session
                const userData = results[0];

                // Log session creation
                console.log('User Found:', userData);


                callback(true, userData);
            } else {
                console.log('User data not found');
                callback(false,null);
            }
        });
    });


   }


  /*
  
  Function: setExersise(sessionID)
  DESCRIPTION: will set an exersiese according to sessionID
  
  
  */
  function setExersise(exerciseData, sessionId)
   {
    getUserNameFromID(sessionId, (username, error) => {

       if(error)
          {
           console.error('Error getting username:', error); 
           return ;
          }
       if(!username)
          {
           console.error('Username not found for the sessionID');
           return;
          }

       console.log('USername found:', username);


       pool.query('INSERT INTO exercise (user_id, name, reps, sets, weekday) VALUES (?, ?, ?, ?, ?)',
       [username, exerciseData.name, exerciseData.reps, exerciseData.sets,  exerciseData.weekday],
       (error) => {
           if (error) {
               console.error('Error executing query:', error);
           } else {
               console.log('Exercise added successfully');
           }
       });

    }); 


   }


/*
  
Function: getUserNameFromID(sessionID)
DESCRIPTION: will get a username fro sessionID
  
*/

function getUserNameFromID(sessionID, callback) 
   {
    pool.query(`
    SELECT * FROM users 
    WHERE username = (
        SELECT SUBSTRING_INDEX(SUBSTRING_INDEX(data, '"username":"', -1), '"', 1) AS username 
        FROM sessions 
        WHERE session_id = ?
    )`, [sessionID], (error, results) => {
    if (error) {
        console.error('Error executing query:', error);
        callback(null, error);
    } else {
        // Check if any results are returned
        if (results.length > 0) {
            // Username found, return it
            callback(results[0].username, null);
        } else {
            // Username not found
            callback(null, 'Username not found for the sessionID');
        }
    }
});
   }


/*
  
Function: getWorkouts(sessionID)
DESCRIPTION: will get a username fro sessionID
  
*/

function getWorkouts(sessionID, dayOfWeek, callback)
   {
    const query = `
            SELECT name, reps, sets, weekday
            FROM exercise
            WHERE user_id = ? AND weekday = ?`;

    // we need to get the user name from the session id
    getUserNameFromID(sessionID, (username, error) => {

        if(error)
           {
            console.error('Error getting username:', error); 
            return ;
           }
        if(!username)
           {
            console.error('Username not found for the sessionID');
            return;
           }
 
        console.log('USername found:', username);

        // now we can complete a query to get all the exersies related to a
        // specific day
        pool.query(query,[username, dayOfWeek], (error, results) => {
      
            if(error)
               {
                console.error('Error executing query:',error);
                callback(null,error);
                return;
               }
            
            if(results.length > 0)
               {
                callback(results, null);
               }
            else
               {
                callback([], null);
               }

        });
 
 
     }); 
   }