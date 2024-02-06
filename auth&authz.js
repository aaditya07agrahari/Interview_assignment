const express = require('express');
const authenticate = require('../Interview/src/middlewares/authMiddlewares');
const authorize = require('../Interview/src/middlewares/authzMiddleware');
const app = express();

// Protected app example (requires authentication)
app.get('/protected', authenticate, (req, res) => {
    res.json({ message: 'Protected app accessed', user: req.user });
});

// Admin app example (requires authentication and admin role)
app.get('/admin', authenticate, authorize('admin'), (req, res) => {
    res.json({ message: 'Admin app accessed', user: req.user });
});

app.use(authenticate);
app.use(authorize);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});