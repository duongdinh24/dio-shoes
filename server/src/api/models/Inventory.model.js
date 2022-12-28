const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const inventorySchema = new Schema({
    productId: {
        type: String,
        unique: true,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    reservations: Array,
    /*
        [
            {
                userId: 1,
                quantity: 10,
            }
        ]
    */

}, {
    collection: 'inventories',
    timestamps: true,
});

module.exports = mongoose.Model('Inventories', inventorySchema);

