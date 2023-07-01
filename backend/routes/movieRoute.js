const express=require('express')

const Moviesrouter=express.Router();
const moviesInfo=require('../Validation/movieValidation')
const {postMovie,getMovies}=require('../controller/api')


Moviesrouter.get('/getMovies',getMovies);
Moviesrouter.post('/postMovie',moviesInfo,postMovie);

module.exports={Moviesrouter};