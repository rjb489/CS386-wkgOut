


document.addEventListener("DOMContentLoaded", function(){
    let form = document.getElementById("userInfo");

    form.addEventListener("submit", (event) => 
    {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if(password == confirmPassword)
           {
             // Send data as an object
            const requestData = {
               username: username,
               password: password
             };

             //add the data to database here
             sendData(requestData);
           }

    

    });


    console.log(username);
});

// make a post request to the server


function sendData(userData) 
{

fetch('http://23.254.211.151:3000/createAccount',{

    method: 'POST',
    headers: {
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
})
.catch(error => console.error('Error:', error));


}