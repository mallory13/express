//routes and controllers are the same thing

var express = require('express');
var router = express.Router();

/* GET home page. */
// router is express library for handling urls
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 5' });
});


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back
router.get('/about', function(req, res, next) {
  res.render('about', {myName: "Mallory", title:"About"});
});


//get random number page 
router.get('/random', function(req, res, next) {
  res.render('random', {randomNumber: Math.random(), title: "Random"});
});


module.exports = router;
