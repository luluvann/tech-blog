const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({}).then((dbPostData) => {
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts,  loggedIn: req.session.loggedIn });  
    });
    
  });

router.get("/login", (req, res) => {
  res.render("login",{ loggedIn: req.session.loggedIn});
});

router.get("/signup", (req, res) => {
  res.render("signup", { loggedIn: req.session.loggedIn});
});

router.get("/dashboard", (req, res) => {
  Post.findAll({}).then((dbPostData) => {
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
  });
});

router.get("/dashboard/new", (req, res) => {
  res.render("newpost", { loggedIn: req.session.loggedIn});
});

module.exports = router;
