const router = require("express").Router()
const userRouter = require("./user")
const cardRouter = require("./card")

router.use("/", userRouter)
router.use("/cards", cardRouter)

module.exports = router