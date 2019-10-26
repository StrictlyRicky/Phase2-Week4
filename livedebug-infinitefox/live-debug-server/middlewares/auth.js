const { verify } = require('../helpers/jwt')
const User = require('../models/user')

module.exports = {
  authentication: function(req, res, next) {
    try {
      const decode = verify(req.headers.token)
      // check user for better validation jwt
      User.findOne({ email: decode.email })
        .then(user => {
          if(user) {
            req.decode = user
            next()
          } else {
            next({ status: 403, message: 'authentication failed' })
          }
        })
        .catch(next)
    } catch(err) {
      console.log(err.message)
      next({ status: 403, message: err })
    }
  }
}