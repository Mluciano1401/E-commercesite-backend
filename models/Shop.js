const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema({
    customer: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    seller: {
        type: String,
        required: true
    }
},{
    timestamps: true
})


module.exports = mongoose.model('Purchase',purchaseSchema);