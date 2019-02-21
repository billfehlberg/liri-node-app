

var keys = require("./keys.js");
var axios = require("axios");



var inputString = process.argv;
var searchType = inputString[2];
var input2 = inputString[3];
var input3 = "The Sign";

if (searchType === "spotify-this-song") {
    //search spotify for input2//
}
else if (searchType === "concert-this")   {
    axios.get("https://rest.bandsintown.com/artists/" + input2 + "/events?app_id=codingbootcamp").then(function(response)  {
        console.log(response);
        console.log("test");
    })
}
else if (searchType === "movie-this")   {
    axios.get("http://www.omdbapi.com/?t=" + input2 + "&apikey=483876eb").then(function(response)   {
        console.log(response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.imdbRating);
        console.log(response.data.Country);
        console.log(response.data.Language);
        console.log(response.data.Plot);
        console.log(response.data.Actors);
    })
};
