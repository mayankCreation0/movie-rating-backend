const mongoose  = require('mongoose')
const movieModel = require("../models/movie")
const userModal = require("../models/user")


const getMovies = async () => {
    const movies = await movieModel.find({});
    return movies;
}

const rateMovie = async (body, userId) => {
    const { movieId, review } = body;
    // const userId = req.user.id;
    console.log()
    try {
    
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
        const reviewInt = parseInt(review);

        const totalRatings = movie.totalCounting + 1;
        const currentRating = Math.floor(movie.averageRating).toFixed(1);
        const newRating = ((currentRating * movie.totalCounting) + reviewInt) / totalRatings;

        console.log('totalRatings:', totalRatings);
        console.log('currentRating:', currentRating);
        console.log('reviewInt:', reviewInt);
        console.log('newRating:', newRating);

        movie.averageRating = newRating;
        movie.totalCounting = totalRatings;
        movie.rating.push({ userId, review });
        await movie.save();

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


const deleteMovieRating = async (body , userId) => {
    const { movieId } = body;
    try {
    
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
        if (!movie) {
            return ({ error: 'Movie not found' });
        }

    
        const ratedMovies = updatedUser.ratedMovies;
        const totalCounting = movie.totalCounting - 1;
        const sumOfRatings = ratedMovies.reduce(
            (total, movie) => total + Number(movie.review),
            0
        );
        const averageRating = parseInt(sumOfRatings) / parseInt(totalCounting);

    
        const updatedMovie = await movieModel.findByIdAndUpdate(
            movieId,
            {
                totalCounting,
                averageRating,
            },
            { new: true }
        );

    
        movie.rating = movie.rating.filter((r) => r.userId.toString() !== userId);
        movie.reviews = movie.reviews.filter((r) => r.userId.toString() !== userId);

        await movie.save();

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


