// script.js

// Interactive functionality for portfolio website

// Function to display current date and time
function displayCurrentDateTime() {
    const dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    document.getElementById('datetime').innerText = dateTime;
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', (event) => {
    displayCurrentDateTime();
});
