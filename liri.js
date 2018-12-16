// Read and set environment variables
require("dotenv").config();

var fs = require("fs");
var axios = require("axios");
var nodeArgs = process.argv;

// Movie this fuction
function movieThis(movieSearch) {
  var movieQueryUrl = "http://www.omdbapi.com/?t=" + movieSearch + "&y=&plot=short&apikey=trilogy";
axios.get(movieQueryUrl).then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);

}

// var search = process.env.slice(3).join(" ")