const { decodeToken } = require('../helpers/jwt')

const authentication = (req, res, next) => {
    try {
        const { access_token } = req.headers
        const loggedUser = decodeToken(access_token)
        req.loggedUser = loggedUser
        next()
    } catch (err) {
        next({ status: 401, message: 'You Must Sign In First!' })
    }
}

module.exports = authentication