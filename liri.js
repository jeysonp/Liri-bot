// Read and set environment variables
require("dotenv").config();

var fs = require("fs");
var axios = require("axios");
var nodeArgs = process.argv;
var searchType = process.argv[2];
var searchTerm = nodeArgs.slice(3).join(" ");

userSearch(searchTerm);

function userSearch() {
 switch (searchType) {
  case "movie-this":
    movieThis(searchType);
    break;
  case "concert-this":
    concertThis(searchType);
    break;
  case "spotify-this-song":
    spotifyThis(searchType);
    break;
  case "do-what-it-says":
    random(searchType);
    break;
  default:
  console.log("Please type one of these commands\n"+ 
    "* 'movie-this' 'Name of a movie'\n"+
    "* 'concert-this': 'Name of a band'\n"+
    "* 'spotify-this-song': 'Name of a song'\n"+
    "* 'do-what-it-says': to run a command from a text file"
    );
 }
}
function movieThis() {
  if (!searchTerm) {
    var queryUrl = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy";
  axios.get(queryUrl).then(
    function(response) {
      console.log(
        "-----------------------------------------------------\n\n"+
        "* Title: " + response.data.Title +"\n"+
        "* Year: " + response.data.Year +"\n"+
        "* IMDB Rating: " + response.data.Ratings[0].Value +"\n"+
        "* Rotten Tomatoes Rating: " + response.data.Ratings[1].Value +"\n"+
        "* Country: " + response.data.Country +"\n"+
        "* Language: " + response.data.Language +"\n"+
        "* Plot: " + response.data.Plot +"\n"+
        "* Cast: " + response.data.Actors +"\n");
    }
  )} else { 
  var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";
  axios.get(queryUrl).then(
    function(response) {
      console.log(
        "-----------------------------------------------------\n\n"+
        "* Title: " + response.data.Title +"\n"+
        "* Year: " + response.data.Year +"\n"+
        "* IMDB Rating: " + response.data.Ratings[0].Value +"\n"+
        "* Rotten Tomatoes Rating: " + response.data.Ratings[1].Value +"\n"+
        "* Country: " + response.data.Country +"\n"+
        "* Language: " + response.data.Language +"\n"+
        "* Plot: " + response.data.Plot +"\n"+
        "* Cast: " + response.data.Actors +"\n");
      })
    }
  };