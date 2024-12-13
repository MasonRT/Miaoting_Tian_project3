const express = require('express');
const router = express.Router();

// User registration
router.post('/register', (req, res) => {
    // Registration logic here
    res.send('User registered');
});

// User login
router.post('/login', (req, res) => {
    // Login logic here
    res.send('User logged in');
});

module.exports = router;
