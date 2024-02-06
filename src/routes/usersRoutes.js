const express = require('express');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwtConfig');
// const authenticate = require('../middlewares/authMiddlewares');
// const authorize = require('../middlewares//authzMiddleware');

const app = express();

// Login route to generate JWT token
app.post('/login', (req, res) => {
    // Sample user data (replace with your authentication logic)
    const user = {
        id: 123,
        username: 'gaurav',
        role: 'user'
    };

    // Generate JWT token
    const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
    
    res.json({ token });
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});