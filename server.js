var express = require("express");
var bodyParser = require("body-parser");
var https = require("https");
var http = require("http");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

//process.env to start up envirnment for app
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/// Routes
// =============================================================

require("/Users/ezdeharjaber/Documents/cwru/FriendFinder/routing/htmlRoutes.js")(app);
require("/Users/ezdeharjaber/Documents/cwru/FriendFinder/routing/apiRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("App listening on PORT " + PORT);
});





// app.get('/', function (req, res) {
//   res.send('hello world')
// })