const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const movieSchema = new mongoose.Schema({
    "title": {
        "type": "string"
    },
    "releaseYear": {
        "type": "string"
    },
    "genres": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "totalCounting": {
        "type": "Number",
    },
    "duration": {
        "type": "string"
    },
    "releaseDate": {
        "type": "string",
        "format": "date"
    },
    "averageRating": {
        "type": "number"
    },
    "originalTitle": {
        "type": "string"
    },
    "storyline": {
        "type": "string"
    },
    "actors": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "imdbRating": {
        "type": "number"
    },
    "img": {
        "type": "string"
    },
    rating: [{ userId: { type: ObjectId, ref: "user" }, review: { type: String } }],
    reviews: [{ userId: { type: ObjectId, ref: "user" }, review: { type: String } }]
})

const movieModel = mongoose.model('movie', movieSchema);
module.exports = movieModel;


