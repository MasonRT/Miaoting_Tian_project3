const express = require('express');
const router = express.Router();

// Create a post
router.post('/', (req, res) => {
    // Create post logic here
    res.send('Post created');
});

// Get all posts
router.get('/', (req, res) => {
    // Fetch posts logic here
    res.send('All posts');
});

module.exports = router;
