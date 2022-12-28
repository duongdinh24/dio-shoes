const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    }
}, {
    collection: 'users',
    timestamps: true,
});

module.exports = mongoose.Model('Users', userSchema);

