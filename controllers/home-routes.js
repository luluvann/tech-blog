const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({}).then((dbPostData) => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render("homepage",{posts});
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/dashboard", (req, res) => {
  
  Post.findAll({}).then((dbPostData) => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render("dashboard",{posts});
  });
  
});

router.get("/dashboard/new", (req, res) => {
  res.render("newpost");
});

module.exports = router;
