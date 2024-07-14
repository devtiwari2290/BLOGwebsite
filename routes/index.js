var express = require('express');
var router = express.Router();
const BlogCollection = require('../models/blogmodel');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ title: "Homepage | BlogWebsite", users: req.user } );
})

router.get("/createblog", function (req, res, next) {
  res.render("createblog", { title: "CreateBlog | BlogWebsite", users: req.user })
});


router.get("/blog", function(req, res, next) {
  res.render('blog',{ title: "Blog | BlogWebsite", users: req.user }  );
})

router.get("/register", function(req, res, next) {
  res.render('register',{ title: "Register| BlogWebsite", users: req.user } );
})

router.get("/login", function(req, res, next) {
  res.render('login', { title: "Login | BlogWebsite", users: req.user  });
})


router.get("/contact", function(req, res, next) {
  res.render('contact', { title: "Contact | BlogWebsite", users: req.user });
})

router.get("/about", function(req, res, next) {
  res.render('about', { title: "About | BlogWebsite", users: req.user });
})
module.exports = router;
