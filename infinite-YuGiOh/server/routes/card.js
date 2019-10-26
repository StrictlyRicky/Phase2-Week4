const router = require("express").Router()
const axios = require("axios")
const authentication = require("../middlewares/authentication")
const Card = require("../models/card")

router.use(authentication)
router.get("/page/:page", (req, res, next) => {
    const { page } = req.params
    axios({
        method: "get",
        url: `https://pacific-lowlands-22955.herokuapp.com/cards/page/${page}`,
        headers: { token: process.env.ACCESS_TOKEN }
    })
    .then(({ data }) => {
        res.status(200).json(data.cards)
    })
    .catch(next)
})
router.get("/detail/:card_number", (req, res, next) => {
    const { card_number } = req.params
    axios({
        method: "get",
        url: `https://pacific-lowlands-22955.herokuapp.com/cards/detail/${card_number}`,
        headers: { token: process.env.ACCESS_TOKEN }
    })
    .then(({ data }) => {
        res.status(200).json(data)
    })
    .catch(console.log)
})
router.post("/collection", (req, res, next) => {
    let card = req.body
    card.ownerId = req.loggedUser._id
    Card.find({ ownerId: req.loggedUser._id, rarity: req.body.rarity }).exec()
    .then(cards => {
        if (cards.length >= 3) {
            next({ message: "Maximum limit of same rarity cards reached" })
        } else {
            Card.findOne({ ownerId: req.loggedUser._id, name: req.body.name }).exec()
            .then(card => {
                if (card) {
                    next({ message: "Card Already Exists" })
                } else {
                    let card = req.body
                    card.ownerId = req.loggedUser._id
                    Card.create(card)
                    .then(card => {
                        res.status(201).json({ msg: "success adding card", card })
                    })
                    .catch(next)
                }
            })
            .catch(next)
        }
    })
})
router.get("/collection", (req, res ,next) => {
    Card.find({ ownerId: req.loggedUser._id }).exec()
    .then(cards => {
        res.status(200).json(cards)
    })
    .catch(next)
})
router.delete("/collection/:id", (req, res, next) => {
    const { id } = req.params
    Card.deleteOne({ ownerId: req.loggedUser._id, _id: id }).exec()
    .then(_ => {
        res.status(200).json({ message: "Delete from collection success", _id: id })
    })
    .catch(next)
})

module.exports = router