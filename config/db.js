const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo DB Connected ${mongoose.connection.host}`.bgGreen.white)
    } catch (error) {
        console.log(`Mongo DB Error ${error}`.bgRed.white)
    }
}

module.exports = connectDB