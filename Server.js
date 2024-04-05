// server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Placeholder for user authentication logic
function authenticateUser(email, password) {
    // Replace this with your actual authentication logic
    return (email === 'example@example.com' && password === 'password');
}

// POST route for handling login form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the user is authenticated
    if (authenticateUser(email, password)) {
        // Redirect to dashboard page upon successful login
        res.redirect('/dashboard');
    } else {
        // Redirect back to login page with error message if login fails
        res.redirect('/login?error=true');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
