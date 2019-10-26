module.exports =
    (err, req, res, next) => {
        const errorMessage = err.message || 'Internal Server Error'
        if (err.name === "ValidationError") {
            let errors = []
            for (let key in err.errors) {
                errors.push(err.errors[key].message)
            }
            res.status(400).json({ errors })
        } else if (errorMessage === "Incorrect Email / Password") {
            res.status(400).json(err)
        } else if (errorMessage === "Maximum limit of same rarity cards reached") {
            res.status(400).json(err)
        } else if (errorMessage === "Card Already Exists") {
            res.status(400).json(err)
        } else {
            res.status(500).json(errorMessage)
        }
    }