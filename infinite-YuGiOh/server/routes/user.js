const router = require("express").Router()
const User = require("../models/user")
const { encodeToken } = require("../helpers/jwt")
const { comparePassword } = require("../helpers/bcrypt")
router.post("/register", (req, res, next) => {
    const { email, password } = req.body
    User.create({ email, password })
    .then(user => {
        const { _id, email, password } = user
        res.status(201).json({ _id, email, password })
    })
    .catch(next)
})

router.post("/login", (req, res, next) => {
    const { email, password } = req.body
    User.findOne({ email }).exec()
    .then(user => {
        if (user && comparePassword(password, user.password)) {
            const { _id, email, password } = user
            const payload = { _id, email, password }
            const token = encodeToken(payload)
            res.status(200).json({ access_token: token })
        } else {
            next({ message: "Incorrect Email / Password" })
        }
    })
    .catch(next)
})

module.exports = router