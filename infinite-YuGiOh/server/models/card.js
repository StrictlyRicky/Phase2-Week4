const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CardSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name Is Required']
    },
    price: {
        type: Number,
        required: [true, 'Price Is Required']
    },
    price_shift: {
        type: Number,
        required: [true, "Price Shift Is Required"]
    },
    card_number: {
        type: String,
        required: [true, 'Card Number Is Required']
    },
    card_set: {
        type: String,
        required: [true, 'Card Set Is Required']
    },
    rarity: {
        type: String,
        required: [true, 'Rarity Is Required']
    },
    img: {
        type: String,
        required: [true, 'Image Is Required']
    },
    ownerId: {
        type: ObjectId,
        ref: "User"
    }
})

const Card = mongoose.model('Card', CardSchema)

module.exports = Card
