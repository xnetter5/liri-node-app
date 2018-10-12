console.log('this is loaded');
const Spotify = require('node-spotify-api');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
var spotify = new Spotify({
    id: process.env.spotify_id,
    secret: process.env.spotify_secret

    module.exports.client = client;
module.exports.spotify = spotify;