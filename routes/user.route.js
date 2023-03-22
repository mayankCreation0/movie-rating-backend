const { Router } = require('express');
const { rateMovie } = require('../controllers/movie');
const { usersignup, userlogin, addRating, deleteRating } = require('../controllers/user');



const userRouter = Router();

userRouter.post('/signup', async (req, res) => {

    try {
        const body = req.body;
        const user = await usersignup(body);
        res.send({
            data: user
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }

})


userRouter.post('/login', async (req, res) => {

    try {
        const body = req.body;
        const user = await userlogin(body);
        res.send({
            data: user
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
})

userRouter.put('/ratings/:id', async (req, res) => {

    try {
        const body = req.body;
        const userId = req.params.id
        const user = await rateMovie(body, userId);
        res.send({
            data: user
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }

})
userRouter.delete('/ratings/:id', async (req, res) => {

    try {
        const body = req.body;
        const userId = req.params.id
        const user = await deleteRating(body, userId);
        res.send({
            data: user
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }

})




module.exports = userRouter;