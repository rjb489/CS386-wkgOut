document.addEventListener("DOMContentLoaded", function(){
    let form = document.getElementById("userInfo");

    form.addEventListener("submit", (event) => 
    {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        //add the data to database here
    });
    console.log(username);
});
