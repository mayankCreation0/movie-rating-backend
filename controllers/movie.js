const mongoose  = require('mongoose')
// const { findById } = require("../models/movie");
const movieModel = require("../models/movie")
const userModal = require("../models/user")


const getMovies = async () => {
    const movies = await movieModel.find({});
    return movies;
}

// const updateMovieRating = async (increaseRating, movieID, ratings) => {
//     let movie = await movieModel.findOne({ _id: movieID });

//     let newRating;
//     let newPeople;

//     if (increaseRating) {
//         const rating = (movie.averageRating * movie.totalCounting) + ratings;
//         newPeople = movie.totalCounting + 1;
//         newRating = (rating / newPeople).toFixed(1);
//     } else {
//         const rating = (movie.averageRating * movie.totalCounting) - ratings;
//         newPeople = movie.totalCounting - 1;
//         newRating = (rating / newPeople).toFixed(1);
//     }

//     const updatedMovie = await movieModel.updateOne({ _id: movieID }, { averageRating: newRating, totalCounting: newPeople });
//     return updatedMovie;
// }

const rateMovie = async (body, userId) => {
    const { movieId, review } = body;
    // const userId = req.user.id;
    console.log()
    try {
        // Find the user by ID and check if the movie is already rated
        const user = await userModal.findById(userId);
        const alreadyRated = user.ratedMovies.some((movie) => movie.movieId.toString() === movieId);

        if (alreadyRated) {
            return ({ msg: 'Movie already rated' });
        }

        // Find the movie by ID
        const movie = await movieModel.findById(movieId);

        if (!movie) {
            return ({ msg: 'Movie not found' });
        }

        // Update the movie's average rating and total counting
        const totalRatings = movie.totalCounting + 1;
        const currentRating = movie.averageRating;
        const newRating = ((parseInt(currentRating) * parseInt(movie.totalCounting)) + parseInt(review)) / parseInt(totalRatings);

        movie.averageRating = newRating;
        movie.totalCounting = totalRatings;

        // Add the user's review to the movie's reviews array
        movie.rating.push({ userId, review });

        // Save the updated movie document
        await movie.save();

        // Add the rated movie to the user's ratedMovies array
        user.ratedMovies.push({ movieId, review });
        await user.save();

        return ({ msg: 'Movie rated successfully' });
    } catch (err) {
        console.error(err.message);
        return ('Server error');
    }
};


const addReview = async (body, userId) => {
    const { movieId, review } = body;

    try {
        const movie = await movieModel.findById(movieId);

        if (!movie) {
            return ({ error: 'Movie not found' });
        }

        const existingReview = movie.reviews.find((r) => r.userId.toString() === userId);

        if (existingReview) {
            return ({ error: 'You have already reviewed this movie' });
        }

        movie.reviews.push({ userId, review });
        await movie.save();

        return ({ message: 'Review added successfully' });
    } catch (err) {
        console.error(err);
        return({ error: 'Server error' });
    }
};


const deleteMovieRating = async (body, userId) => {
    const { movieId } = body;
    // const { userId } = req.body;
    try {
        // Remove the rating from the ratedMovies array
        const updatedUser = await userModal.findByIdAndUpdate(
            userId,
            {
                $pull: {
                    ratedMovies: {
                        movieId: movieId,
                    },
                },
            },
            { new: true }
        );
        if (!updatedUser) {
            return ({ error: 'User not found' });
        }
        const movie = await movieModel.findById(movieId);
        console.log(movie.totalCounting)
        // Calculate the new totalCounting and averageRating values for the movie
        const ratedMovies = updatedUser.ratedMovies;
        const totalCounting = movie.totalCounting - 1;
        const sumOfRatings = ratedMovies.reduce(
            (total, movie) => total + Number(movie.review),
            0
        );
        console.log(sumOfRatings , totalCounting)
        const averageRating = parseInt(sumOfRatings) / parseInt(totalCounting);

        // Update the movie with the new values
        const updatedMovie = await movieModel.findByIdAndUpdate(
            movieId,
            {
                totalCounting,
                averageRating,
            },
            { new: true }
        );

        if (!updatedMovie) {
            return ({ error: 'Movie not found' });
        }

        return ({
            message: 'Rating deleted successfully',
            updatedMovie,
        });
    } catch (error) {
        console.error(error);
        return ({ error: 'Internal server error' });
    }
};


const getmoviesbyId = async (id) => {
    try {
        const movie = await movieModel.findById(id);
        return movie
    } catch (error) {
        console.log(error)
    }
}


module.exports = { getMovies, getmoviesbyId, rateMovie, deleteMovieRating ,addReview}