//authentication middleware

const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwtConfig');

function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }

    // Verify token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        req.user = decoded; // Attach user information to request object
        next();
    });
}

module.exports = authenticate;
