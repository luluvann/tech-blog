const { Post } = require("../models");

const postdata = [
  {
    title: "Why MVC is so important",
    content: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;