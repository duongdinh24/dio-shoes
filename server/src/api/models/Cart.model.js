const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const cartSchema = new Schema({
    cartId: {
        type: String,
        unique: true,
        required: true,
    },
    userId: {
        type: String,
        unique: true,
        required: true,
    },
    status: {
        type: String,
        default: 'active',
    },

}, {
    collection: 'oders',
    timestamps: true,
});

module.exports = mongoose.Model('Carts', cartSchema);

