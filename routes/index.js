var express = require('express');
var router = express.Router();
const User = require("../models/usermodel");
const passport = require("passport");
const LocalStrategy = require("passport-local");
passport.use(new LocalStrategy(User.authenticate()));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
});

router.get("/blog", function(req, res, next) {
  res.render('blog', );
})

router.get("/register", function(req, res, next) {
  res.render('register', );
});

router.get("/login", function(req, res, next) {
  res.render('login', );
});

router.get("/profile", function(req, res, next) {
  res.render('profile',);
});

router.get("/contact", function(req, res, next) {
  res.render('contact',);
});

router.get("/about", function(req, res, next) {
  res.render('about',);
});

module.exports = router;
