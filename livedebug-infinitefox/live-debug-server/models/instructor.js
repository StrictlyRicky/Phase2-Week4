const { Schema, model } = require('mongoose')

const instructorSchema = new Schema({
  firstName: {
    type: String,
    required: "First name required"
  },
  lastName: {
    type: String,
    required: "Last name required"
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
  }
}, {
  timestamps: true
})

// validation
instructorSchema.path('email').validate(function(value) {
  return Instructor.findOne({ email: value })
    .then(instructor => {
      if(instructor) return false
    })
}, 'Email instructor is already registered!')

const Instructor = model('Instructor', instructorSchema)

module.exports = Instructor
