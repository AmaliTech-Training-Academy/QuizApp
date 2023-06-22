const jwt = require('jsonwebtoken')

//verify Token will be used in the protected routes

function protectedRoute(req, res, next) {
    const token = req.header('x-auth-token')
    if(!token) return res.status(401).send('Access denied. No token provided')

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(400).send('Invalid token')
    }
}

module.exports = protectedRoute