//Importing express library
const express = require("express");

//Creating app
const app = express();

//Importing CONTROLLERS
const { getAllPosts, getPostbyId } = require("./src/controllers/post");
const { getAllUsers, getUserbyId } = require("./src/controllers/user");
const { getAllAlbums, getAlbumsbyUserId } = require("./src/controllers/albums");

//ROUTES

//Users
app.get("/users", (req, res) => {
  var users = getAllUsers();
  res.send(users);
});
app.get("/users/:id", async (req, res) => {
  //running getUserbyId func from user controller
  var user = await getUserbyId(req.params.id);
  res.send(user);
});

//Posts
app.get("/posts", (req, res) => {
  var posts = getAllPosts();
  res.send(posts);
});
app.get("/posts/:id", async (req, res) => {
  //running getPostbyId func from post controller
  var post = await getPostbyId(req.params.id);
  res.send(post);
});

//Albums
app.get("/albums", (req, res) => {
  var albums = getAllAlbums();
  res.send(albums);
});
app.get("/albums/:userid", async (req, res) => {
  //running getAlbumsrbyUserId func from albums controller
  var userAlbums = await getAlbumsbyUserId(req.params.userid);
  res.send(userAlbums);
});

//Defining port
var PORT = 3030 || 5000;

//Running server
app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
