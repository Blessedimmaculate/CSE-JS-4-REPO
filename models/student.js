const mongoose = require('mongoose') // import mongoose

// use mongoose to create a schema
const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim:true,
    },
    gender: {
        type: String,
        required: true,
        default: "Male",
        enum: ["Male", "Female"]
    },
    isSponsored: {
        type: Boolean,
        required: false
    },
})

module.exports = mongoose.model('student', studentSchema); // create a model using the defined schema
