async function asyncErrorMiddleware(err, req, res, next) {
    try {
        console.error('Asynchronous error:', err);
        await Promise.reject(new Error('Internal Server Error'));
    } catch (error) {
        next(error);
    }
}

module.exports = asyncErrorMiddleware;
