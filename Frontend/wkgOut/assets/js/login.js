document.addEventListener('DOMContentLoaded', function() {

    // get the login form
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {

        // Prevent the form from submitting prematuraly
        event.preventDefault(); 

        // Retrieve values from form fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        

        // Passwords match, do something (e.g., submit the form)
        // For demonstration purposes, let's log the username and password
        console.log('Username:', username);
        console.log('Password:', password);

        // get the data data to a userData constant
        const userData = {
            username: username,
            password: password
        }

        // call send data 
        sendData(userData);
           

        // For now, let's reset the form
        form.reset();
    });
});

function sendData(userData)
   {
    // call a fetch at the url and the request
    fetch('https://weebworkout.com:3000/authoricate',{

        method: 'POST',
        headers:{
            'Content-Type': 'application/json'   
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Response from server:', data);
        // if the function was properly executed then you can return a true
        console.log("Correct output occured");

        
    })
    .catch(error => console.error('Error:', error));
    
   }