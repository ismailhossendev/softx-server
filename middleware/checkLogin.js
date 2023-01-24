const jwt = require('jsonwebtoken');

const checkLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization) {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_HEX);
        req.user = decoded;
        next();
    } else {
        res.status(401).json({ message: 'Authentication error' });
    }

};

module.exports = checkLogin;