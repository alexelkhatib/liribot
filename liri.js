//Pseudocode
//Install Packages


require('dotenv').config();

// Variables //

var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify);
var request = require("request");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// Input from user //
var userAction = process.argv[2];
var requestParameter = process.argv.slice(3).join(" ");

// Function to carry out functions //
UserInputs(userOption, inputParameter);

// Functions //
function UserWorking (userAction, requestParameter){
    switch (userAction) {
    case 'concert-this':
        showConcertInfo(requestParameter);
        break;
    case 'spotify-this-song':
        showSongInfo(requestParameter);
        break;
    case 'movie-this':
        showMovieInfo(requestParameter);
        break;
    case 'do-what-it-says':
        showSomeInfo();
        break;
    default: 
        console.log("Sorry, we can't accept that input. Try again with any of theese options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
    }
}

// Music Response Function //
function displaySpotifyResponse(requestParameter) {
    // If there is no user input, the system defaults to 'Can't Say' the best song off of Travis Scott's Astroworld Album
    if (requestParameter === undefined)
    inputParameter = "Can't Say";
}
 spotify.search(
        {
            type: "track",
            query: inputParameter
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
