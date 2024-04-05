// Function to handle login form submission
function handleLoginFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('/login', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Redirect to dashboard page if login is successful
            window.location.href = '/dashboard';
        } else {
            // Display error message if login fails
            alert('Login failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}

// Function to handle logout form submission
function handleLogoutFormSubmit(event) {
    event.preventDefault();

    fetch('/logout', {
        method: 'POST'
    })
    .then(response => {
        if (response.ok) {
            // Redirect to login page after logout
            window.location.href = '/';
        } else {
            // Display error message if logout fails
            alert('Logout failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}

// Add event listeners for login and logout forms
document.getElementById('login-form').addEventListener('submit', handleLoginFormSubmit);
document.getElementById('logout-form').addEventListener('submit', handleLogoutFormSubmit);
