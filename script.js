// Selecting elements
let spanToggle = document.getElementById("spanToggle");
let wordToggle=document.getElementById("wordToggle");
let btn = document.getElementById("btn");
let loginForm=document.querySelector(".user-form");
let password=document.querySelector("#password");
let heading = document.querySelector("h2");

// Adding event listener to span
spanToggle.addEventListener('click', () => {
    // Toggle between Register and Login
    if (spanToggle.innerText === "Register here") {
        btn.innerText = "Register";
        spanToggle.innerText = "Login";
         wordToggle.innerText = "Already";
        heading.innerText = "REGISTER";

        let confirmPasswordInput = document.createElement("input");
    confirmPasswordInput.setAttribute("type", "password");
    confirmPasswordInput.setAttribute("placeholder", "Confirm Password");
   
    confirmPasswordInput.setAttribute("id", "confirm-password"); // Apply the same class as username and password
    
    // Append the confirm password input field to the login form
    loginForm.appendChild(confirmPasswordInput);
    } else {
         btn.innerText = "Login";
        spanToggle.innerText = "Register here";
         wordToggle.innerText = "Not";
        heading.innerText = "LOGIN";
        // Remove the Confirm Password input field if it exists
        let confirmPasswordInput = document.getElementById("confirm-password");
        if (confirmPasswordInput) {
            confirmPasswordInput.remove();
        }
    
    }
});
document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values of the password fields
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        // Display error message
        let errorMessage = document.createElement("p");
        errorMessage.setAttribute("class", "form-text");
        errorMessage.setAttribute("id", "errorText");
        errorMessage.innerHTML = "Password doesn't match!";
        
        // Append error message to error container
        let errorContainer = document.getElementById("errorContainer");
        errorContainer.innerHTML = ''; // Clear existing error messages
        errorContainer.appendChild(errorMessage);
    } else {
        // Passwords match, hide error message if it exists
        let errorText = document.getElementById("errorText");
        if (errorText) {
            errorText.remove();
        }
    }
});
