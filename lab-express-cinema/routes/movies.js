const express = require('express');
const router = express.Router();
// import movies model

const Movie = require('../models/movie')
/* GET home page */
// here the url goes: localhost:3000/movies => bacause I have /movies as prefix in app.js 
router.get('/', (req, res, next) => {
  Movie.find()
    .then((theMovies) => {
      console.log(theMovies);
      res.render('movies', { theMovies });
    })
    .catch((err) => {
      console.log(err);
    })
});

// router.get('/:id', (req, res, next) => {
//   const movieId = req.params.id;
//   res.render('movies');
// });

module.exports = router;
