const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    urlImg: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    idCategory: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

})


module.exports = mongoose.model('Product',ProductSchema);