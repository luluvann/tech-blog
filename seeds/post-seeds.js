const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    content: "ewfewf",
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;