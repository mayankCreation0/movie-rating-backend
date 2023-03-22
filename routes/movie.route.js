const { Router } = require('express');
const { getMovies, getmoviesbyId ,rateMovie ,addReview, deleteMovieRating} = require('../controllers/movie');


const movieRouter = Router();
movieRouter.get('/', async (req, res) => {
    try {
        const movies = await getMovies();
        res.send({
            data: movies
        })
    } catch (err) {
        res.status(500).send({
            err: 'Someting Got Wrong'
        })
    }
})
movieRouter.get('/:id' , async(req,res)=>{
    const id = req.params.id;
    try {
        const movie = await getmoviesbyId(id);
        res.send(movie).status(200)
    } catch (error) {
        res.status(500).send(error)
    }
})
movieRouter.put('/rate/:id', async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    try {
        const movie = await rateMovie(body,id);
        res.send(movie).status(200)
    } catch (error) {
        res.status(500).send(error)
    }
})
movieRouter.put('/review/:id', async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    try {
        const movie = await addReview(body, id);
        res.send(movie).status(200)
    } catch (error) {
        res.status(500).send(error)
    }
})
movieRouter.delete('/delete/:id', async (req, res) => {
    const body =req.body;
    const id = req.params.id;
    try {
        const movie = await deleteMovieRating(body,id);
        res.send(movie).status(200)
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = movieRouter;