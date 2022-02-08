//importing data to use
const posts = require("../data/posts.json");

//method to get all posts
const getAllPosts = () => {
  try {
    //Sending all posts data
    return posts;
  } catch (err) {
    //returning error
    return `Error occured during process:${err}`;
  }
};

//method for getting a post by id
const getPostbyId = async (id) => {
  try {
    //filtering the desired post
    var post = await posts.filter((p) => p.id == id);
    return post;
  } catch (err) {
    return `Error occured during process:${err}`;
  }
};

//exporting functions
module.exports.getAllPosts = getAllPosts;
module.exports.getPostbyId = getPostbyId;
