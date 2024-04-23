document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Retrieve values from form fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;

        // Check if password matches confirmation password
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return; // Exit function
        }

        // Passwords match, do something (e.g., submit the form)
        // For demonstration purposes, let's log the username and password
        console.log('Username:', username);
        console.log('Password:', password);

        // get the data data to a requestData constant
        const requestData = {
            username: username,
            password: password
        }

        // call send data and check if returned true
        if(sendData(requestData))
           {
            // if so redirect to the home page
            // TODO:redirect to sign in page
           }

        // For now, let's reset the form
        form.reset();
    });
});

function sendData(userData)
   {
    // call a fetch at the url and the request
    fetch('https://weebworkout.com:3000/createAccount',{

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
        return true;
    })
    .catch(error => console.error('Error:', error));

   }