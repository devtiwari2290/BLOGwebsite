var express = require('express');
var router = express.Router();
const db = require('../models/connect');
const { isLoggedIn } = require("../middleware/auth");
const UserCollection = require('../models/usermodel');
const BlogCollection = require('../models/blogmodel');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(UserCollection.authenticate()));




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", async (req, res, next) => {
  try {
      const { username, password, email } = req.body;
      const nonChangableData = { username, email};
      const encryptedData = password;
      await UserCollection.register(nonChangableData, encryptedData);
      res.redirect("/login");
  } catch (error) {
      console.log(error);
      res.send(error.message);
  }
})

router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("profile", { title: "Profile| BlogWebsite", users: req.user });
})

router.post("/login", passport.authenticate("local", {
  successRedirect: "/users/profile",
  failureRedirect: "/login"
}), (req, res, next) => {

});


router.get("/logout", isLoggedIn, (req, res, next) => {
  req.logout(() => {
      res.redirect("/login");
  });
});



router.post("/createblog", async (req, res, next) => {
  try{
      const newBlog = new BlogCollection({
          title: req.body.title,
          description: req.body.description,
          image: req.body.image,
          createdBy: req.user._id
      });
      await newBlog.save();
      await req.user.blogs.push(newBlog._id);
      await req.user.save();
      res.redirect("/profile");

  }
  catch(error){
      console.log(error);
  }
})



module.exports = router;
