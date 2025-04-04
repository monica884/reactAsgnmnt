const { mongoose, SchemaTypes, Types } = require("mongoose")

const signupSchema = new mongoose.Schema({
    Name: {
        type: SchemaTypes.String,
        required: true
    },
    ProfilePhoto: {
        type: SchemaTypes.String,
        required: true
    },
    Email: {
        type: SchemaTypes.String,
        required: true
    },
    Password: {
        type: SchemaTypes.String,
        required: true
    },
    Contact: {
        type: SchemaTypes.String,
        required: true
    },
})

const Signup = mongoose.model('Signup', signupSchema)

module.exports = Signup