
const Keys = require("./keys.js");

const fs = require('fs');

const request = require("request");

const spotify = Keys.spotify;

const command = process.argv[2];

var randomSongName;

  twitClient.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
     
      for (var i = 0; i < tweets.length; i++) {
        console.log(`\nTweet ${i + 1}: ${tweets[i].text}`);
        console.log(`Created On: ${tweets[i].created_at}`);
        console.log("\n-------------------");
      }
    } else {
      console.log(error);
    }
  });
}


if (command == 'spotify-this-song') {
  var songName = process.argv[3];

  spotify.search({ type: 'track', query: `${songName}` }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    
      console.log(`Artist: ${data.tracks.items[0].artists[0].name}`);
     
      console.log(`Song Name: ${data.tracks.items[0].name}`);
     
      console.log(`URL: ${data.tracks.items[0].external_urls.spotify}`);
     
      console.log(`Album: ${data.tracks.items[0].album.name}`);
 
  });
}


if (command === "movie-this") {
  var movie = process.argv[3];
  request(`http://www.omdbapi.com/?apikey=40e9cece&t=${movie}`, function(error, response, body) {
    if (error) {
      console.log("error:", error); 
    } else {
      
      console.log(`Title: ${JSON.parse(body).Title}`); 
      console.log(`Year: ${JSON.parse(body).Year}`); 
      console.log(`IMDB Rating: ${JSON.parse(body).Ratings[0].Value}`); 
      console.log(
        `Rotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}`
      )
      console.log(`Country: ${JSON.parse(body).Country}`); 
      console.log(`Language(s): ${JSON.parse(body).Language}`); 
      console.log(`Plot: ${JSON.parse(body).Plot}`); 
      console.log(`Actors: ${JSON.parse(body).Actors}`); 
    }
  });
}


if (command === 'do-what-it-says') {
    doStuff();
}


function doStuff () {
  fs.readFile('random.txt', 'utf8', function(err, data) {
      
      if (err) {
        return console.log(error);
      }
     
      var dataArr = data.split(",");
      randomSongName = dataArr[1];
   
      spotify.search({ type: 'track', query: `${randomSongName}` }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
    
        console.log(`Artist: ${data.tracks.items[0].artists[0].name}`);
      
        console.log(`Song Name: ${data.tracks.items[0].name}`);
       
        console.log(`URL: ${data.tracks.items[0].external_urls.spotify}`);
      
        console.log(`Album: ${data.tracks.items[0].album.name}`);
    });
  });
}