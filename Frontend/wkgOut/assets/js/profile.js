function changeUsername(newUsername) {
    fetch('/change-username', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: newUsername })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            oldUsernameValue = newUsername;
            document.getElementById("oldUsername").innerText = "Old Username: " + newUsername;
            alert("Username changed to " + newUsername);
        } else {
            alert("Failed to change username");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while changing username");
    });
}

function changePassword(newPassword) {
    fetch('/change-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: newPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Password changed successfully");
        } else {
            alert("Failed to change password");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while changing password");
    });
}
// Function to show or hide the textboxes based on button click
function showTextbox(type) {
    const usernameTextbox = document.getElementById("newUsernameTextbox");
    const passwordTextbox = document.getElementById("newPasswordTextbox");

    if (type === "newUsername") {
        if (usernameTextbox.style.display === "none" || usernameTextbox.style.display === "") {
            usernameTextbox.style.display = "block";
        } else {
            usernameTextbox.style.display = "none";
        }
        // Hide password textbox if it's visible
        passwordTextbox.style.display = "none";
    } else if (type === "newPassword") {
        if (passwordTextbox.style.display === "none" || passwordTextbox.style.display === "") {
            passwordTextbox.style.display = "block";
        } else {
            passwordTextbox.style.display = "none";
        }
        // Hide username textbox if it's visible
        usernameTextbox.style.display = "none";
    }
}

// Function to save changes
function saveChanges() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newpassword").value;

    // Call changeUsername and changePassword functions
    if (newUsername) {
        changeUsername(newUsername);
    }
    if (newPassword) {
        changePassword(newPassword);
    }

    // Clear textboxes
    document.getElementById("newUsername").value = "";
    document.getElementById("newpassword").value = "";

    // Hide textboxes
    document.getElementById("newUsernameTextbox").style.display = "none";
    document.getElementById("newPasswordTextbox").style.display = "none";

    // Show alert that changes were saved
    alert("Changes were saved successfully!");
}