function syncErrorMiddleware(err, req, res, next) {
    try {
        console.error('Synchronous error:', err);
        throw new Error('Internal Server Error');
    } catch (error) {
        next(error);
    }
}

module.exports = syncErrorMiddleware;
