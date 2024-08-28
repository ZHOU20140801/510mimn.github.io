// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory storage for simplicity
let comments = [];

// Route to get all comments
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

// Route to add a new comment
app.post('/api/comments', (req, res) => {
    const newComment = req.body;
    if (newComment.text) {
        comments.push(newComment);
        res.status(201).json(newComment);
    } else {
        res.status(400).json({ error: 'Comment text is required' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
