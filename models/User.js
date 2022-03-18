const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        required: false
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

})


module.exports = mongoose.model('User', UserSchema);