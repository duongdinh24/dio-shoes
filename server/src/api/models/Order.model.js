const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const orderSchema = new Schema({
    orderId: {
        type: String,
        unique: true,
        required: true,
    },
    userId: {
        type: String,
        unique: true,
        required: true,
    },
    shiping: {
        type: Object,
        required: true,
    },

    payment: {
        type: Object,
        required: true,
    }

}, {
    collection: 'oders',
    timestamps: true,
});

module.exports = mongoose.Model('Orders', orderSchema);

