const errorResponse = require('../utils/errorResponse')

const errorHandler = (req, res, next, err) => {
    let error = {...err}
    error.message = err.message

    //mongoose
    if(err.name === 'CastError'){
        const message = 'Resources not found'
        error = new errorResponse(message, 404)
    }
    //duplicate key error
    if(err.code === 11000){
        const message = 'Duplicate field vale entered'
        error = new errorResponse(message, 400)
    }

    //mongoose vaidation
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message)
        error = new errorResponse(message, 400)
        res.status(error.statusCode || 500 ).json({
            success: false,
            error : error.message || 'Server Error'
        })
    }
}

module.exports = errorHandler