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
    age: {
        type: Number,
        trim: true,
    },
    sex:{
        type: String,
        trim:true,
    },
})

module.exports = mongoose.model('student', studentSchema); // create a model using the defined schema
