const Instructor = require('../models/instructor')

class InstructorController {
  static create(req, res, next) {
    const { firstName, lastName, email } = req.body
    Instructor.create({ firstName, lastName, email })
      .then(instructor => res.status(201).json(instructor))
      .catch(next)
  }
  static readAll(req, res, next) {
    Instructor.find()
      .then(instructors => res.status(200).json(instructors))
      .catch(next)
  }
  static readOne(req, res, next) {
    Instructor.findById(req.params.id)
      .then(instructor => {
        if(instructor) res.status(200).json(instructor)
        else next({ status: 404, message: 'instructor not found' })
      })
      .catch(next)
  }
  static update(req, res, next) {
    const { firstName, lastName, email } = req.body
    Instructor.updateOne({ _id: req.params.id }, { firstName, lastName, email }, { rawResult: true })
      .then(instructor => res.status(200).json(instructor))
      .catch(next)
  }
  static delete(req, res, next) {
    Instructor.findById(req.params.id)
      .then(instructor => {
        if(instructor !== null) return Instructor.findByIdAndDelete(req.params.id)
        else throw ({ status: 404, message: 'instructor not found' })
      })
      .then(_ => res.status(204).json({ message: 'delete instructor, success!' }))
      .catch(next)
  }
}

module.exports = InstructorController
