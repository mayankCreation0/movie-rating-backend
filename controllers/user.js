const userModel = require('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const usersignup = async ({ username, email, password }) => {
    const existinguser = await userModel.findOne({ email: email });
    if (existinguser) {
        throw new Error('Already Registered');
    }
    const hashedPassword = await bcrypt.hash(password, 11);
    const newUser = await userModel.create({
        username: username,
        email: email,
        password: hashedPassword,
    });
    return newUser
};
const userlogin = async ({ email, password }) => {
    const existinguser = await userModel.findOne({ email: email });
    if (!existinguser) {
        throw new Error('User Not Found');
    }
    const matchPassword = await bcrypt.compare(password, existinguser.password);
    if (!matchPassword) {
        throw new Error('Wrong Password');
    }
    const token = jwt.sign(
        { email: existinguser.email, id: existinguser._id },
        process.env.SECRET_KEY
    );
    
    return existinguser
};
const addRating = async ({ movieId, ratings }, userId) => {
    const existinguser = await userModel.findOne({ _id: userId });
    if (!existinguser) {
        throw new Error('User Not Found');
    }

    const ratedMovies = existinguser.ratedMovies || [];
    let foundIndex;
    ratedMovies.forEach((ele, idx) => {
        if (ele.movieID == movieId) {
            foundIndex = idx;
            return;
        }
    })

    if (foundIndex) {
        throw new Error('Already Rated Movie');
    }

    ratedMovies.push({ movieId, ratings });
    const updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { ratedMovies });
    await updateMovieRating(true, movieId, ratings);
    return updatedUser

}

const deleteRating = async ({ movieId }, userId) => {

    const existinguser = await userModel.findOne({ _id: userId });
    if (!existinguser) {
        throw new Error('User Not Found');
    }

    const ratedMovies = existinguser.ratedMovies || [];
    let foundIndex;

    for (let i = 0; i < ratedMovies.length; i++) {
        if (ratedMovies[i].movieId == movieId) {
            foundIndex = i;
            break;
        }
    }


    if (foundIndex == undefined) {
        throw new Error('Movie Not Found');
    }

    await updateMovieRating(false, movieId, ratedMovies[foundIndex].ratings);
    ratedMovies.splice(foundIndex, 1);
    const updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { ratedMovies });
    return updatedUser;

}

module.exports = {
    userlogin, usersignup, addRating, deleteRating
};