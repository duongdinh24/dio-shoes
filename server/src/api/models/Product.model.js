const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const productSchema = new Schema({
    productId: {
        type: String,
        unique: true,
        required: true,
    },
    code: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        unique: true,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sale: {
        type: Number,
        default: 0,
    },
    specs: {
        type: Array,
    },

}, {
    collection: 'inventories',
    timestamps: true,
});

module.exports = mongoose.Model('Products', productSchema);
