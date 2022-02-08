//importing data to use
const users = require("../data/users.json");

//method to get all users
const getAllUsers = () => {
  try {
    //Sending all users data
    return users;
  } catch (err) {
    //returning error
    return `Error occured during process:${err}`;
  }
};

//method for getting a user by id
const getUserbyId = async (id) => {
  try {
    //filtering the desired user
    var user = await users.filter((p) => p.id == id);
    return user;
  } catch (err) {
    //returning error
    return `Error occured during process:${err}`;
  }
};

//exporting functions
module.exports.getAllUsers = getAllUsers;
module.exports.getUserbyId = getUserbyId;
