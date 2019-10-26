const { Schema, model } = require('mongoose')
const { hashPassword } = require('../helpers/bcryptjs')


const userSchema = new Schema({
  name: {
    type: String,
    required: "Name required"
  },
  email: {
    type: String,
    required: "Email required",
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Email invalid format"
    },
    unique: true,
  },
  password: {
    type: String,
    required: "Password required",
    minlength: [6, "Password min 6 char"]
  }
}, {
  timestamps: true
})

// validation
userSchema.path('email').validate(function() {
  return User.findOne({ email: this.email })
    .then(user => {
      if(user) return false
    })
}, 'Email user is already registered!')

// hashPassword
userSchema.pre('save', function(next) {
  // kalo udah ke save
  this.password = hashPassword(this.password)
  next()
})

const User = model('User', userSchema)

module.exports = User
