const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema =  new Schema({
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
        required: true,
        unique: true
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
    urlImg:{
        type: String,
        required: false
    },
    biography:{
        type: String,
        required: false
    }
},
{
    timestamps: true
})


module.exports = UserSchema;