const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        // required: true,
        // unique: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true,
    },
    password: {
        type: String,
        required: true
    },
    ratedMovies: { type: [Object] },
    reviewed:{type:[Object]}
});

module.exports = mongoose.model('user', UserSchema);