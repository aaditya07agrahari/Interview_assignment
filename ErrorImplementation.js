const express = require('express');
const syncErrorMiddleware = require('./src/utils/ErrorHandler/syncErrorHandler');
const asyncErrorMiddleware = require('./src/utils/ErrorHandler/asyncErrorHandler');

const app = express();

// Middleware for synchronous error handling
app.use((req, res, next) => {
    try {
        // Simulate synchronous error
        throw new Error('Sync error');
    } catch (err) {
        next(err); // Pass error to the error handling middleware
    }
});

// Middleware for asynchronous error handling
app.use(async (req, res, next) => {
    try {
        // Simulate asynchronous error
        await Promise.reject(new Error('Async error'));
    } catch (err) {
        next(err); // Pass error to the error handling middleware
    }
});

// Error handling middleware
app.use(syncErrorMiddleware);
app.use(asyncErrorMiddleware);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
