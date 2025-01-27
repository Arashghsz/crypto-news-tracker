const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running' });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
