


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
             if(sendData(requestData))
              {
                // reroute to home page
                window.location.replace("file:///C:/Users/chasd/Desktop/cs_386_new/CS386-wkgOut/Frontend/front_page/Front%20page.html");
                console.log("Correct output occured");

              }
             else
              {
                // Get the element by its ID
               var paragraph = document.getElementById("issue-occured");
        
               // Modify the text content of the paragraph
               paragraph.innerText = "ERROR: USER ALREADY EXISTS";
              }
            
           }
           else
              {
               // Get the element by its ID
               var paragraph = document.getElementById("issue-occured");
        
               // Modify the text content of the paragraph
               paragraph.innerText = "ERROR: PASSWORD DOES NOT MATCH";

              }
        // TODO: Have an else statment that says password is not the same

    

    });


    console.log(username);
});

// make a post request to the server

/*

Function: sendData
DESCRIPTION: will send a post to create a new account
with the userData inputed


*/


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
    // if the function was properly executed then you can return a true
    window.location.replace("file:///C:/Users/chasd/Desktop/cs_386_new/CS386-wkgOut/Frontend/front_page/Front%20page.html");
    console.log("Correct output occured");
    return true;
})
.catch(error => console.error('Error:', error));

 
}