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

const addRating = async (body, userId) => {
    const { movieId, review } = body;
    // const userId = req.params.userId;

    try {
        const user = await userModel.findById(userId);
        if (!user) {
            return ({ error: "User not found" });
        }

        // Check if the movie is already rated
        const isMovieRated = user.ratedMovies.some(
            (ratedMovie) => ratedMovie.movieId.toString() === movieId
        );
        if (isMovieRated) {
            return { error: "Movie is already rated" };
        }

        // Add the new rating to the user's ratedMovies array
        user.ratedMovies.push({ movieId, review });
        await user.save();
        return (user);
    } catch (err) {
        console.error(err);
        return ({ error: "Server error" });
    }
};


const deleteRating = async (body, userId) => {
    const { movieId } = body;
    // const userId = req.params.userId;

    try {
        const user = await userModel.findById(userId);
        if (!user) {
            return ({ error: "User not found" });
        }

        // Find the index of the movie to be deleted in the ratedMovies array
        const movieIndex = user.ratedMovies.findIndex(
            (ratedMovie) => ratedMovie.movieId.toString() === movieId
        );
        if (movieIndex === -1) {
            return ({ error: "Movie not found in ratedMovies" });
        }

        // Remove the movie from the ratedMovies array and save the user object
        user.ratedMovies.splice(movieIndex, 1);
        await user.save();
        return (user);
    } catch (err) {
        console.error(err);
        return ({ error: "Server error" });
    }
};

// const deleteRating = async ({ movieId }, userId) => {

//     const existinguser = await userModel.findOne({ _id: userId });
//     if (!existinguser) {
//         throw new Error('User Not Found');
//     }

//     const ratedMovies = existinguser.ratedMovies || [];
//     let foundIndex;

//     for (let i = 0; i < ratedMovies.length; i++) {
//         if (ratedMovies[i].movieId == movieId) {
//             foundIndex = i;
//             break;
//         }
//     }


//     if (foundIndex == undefined) {
//         throw new Error('Movie Not Found');
//     }

//     await updateMovieRating(false, movieId, ratedMovies[foundIndex].ratings);
//     ratedMovies.splice(foundIndex, 1);
//     const updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { ratedMovies });
//     return updatedUser;

// }

module.exports = {
    userlogin, usersignup, addRating, deleteRating
};