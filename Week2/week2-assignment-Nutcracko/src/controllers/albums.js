//importing data to use
const albums = require("../data/albums.json");

//method to get all albums
const getAllAlbums = () => {
  try {
    //Sending all albums data
    return albums;
  } catch (err) {
    //returning error
    return `Error occured during process:${err}`;
  }
};

//method for getting a albums that are owned by a user by userid
const getAlbumsbyUserId = async (userid) => {
  try {
    //filtering the desired albums
    var filteredAlbums = await albums.filter((a) => a.userId == userid);
    return filteredAlbums;
  } catch (err) {
    //returning error
    return `Error occured during process:${err}`;
  }
};

//exporting functions
module.exports.getAllAlbums = getAllAlbums;
module.exports.getAlbumsbyUserId = getAlbumsbyUserId;
