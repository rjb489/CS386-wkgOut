


document.addEventListener("DOMContentLoaded", function(){
    let form = document.getElementById("userInfo");

    form.addEventListener("submit", (event) => 
    {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        // Send data as an object
        const userData = {
            username: username,
            password: password
        };

        sendData(userData);
    
        console.log(username);
        console.log(password);
    });


});

// make a post request to the server

/*

Function: authoricateData
DESCRIPTION: will send data to get a responce
if responce good then returns true


*/

function sendData(userData) 
{

fetch('http://23.254.211.151:3000/authoricate',{

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
    // if the function was properly executed then you can return a true
    return true;
})
.catch(error => console.error('Error:', error));

 
}
