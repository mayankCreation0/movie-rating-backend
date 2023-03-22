const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    ratedMovies:[{movieId:{type:ObjectId, ref:"movie"},review:{type:String}}],
    
});

module.exports = mongoose.model('user', UserSchema);