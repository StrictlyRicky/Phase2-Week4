const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const validate = require("mongoose-validator")
const { hashPassword } = require("../helpers/bcrypt")
const uniqueValidator = require('mongoose-unique-validator');

const emailValidator = [
    validate({
        validator: 'isEmail',
        message: "Email Format Is Incorrect"
    })
]

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email Is Required"],
        unique: "Email Is Already Taken",
        validate: emailValidator
    },
    password: {
        type: String,
        required: [true, "Password Is Required"]
    }
})

UserSchema.plugin(uniqueValidator)

UserSchema.pre("save", function(next) {
    this.password = hashPassword(this.password)
    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User