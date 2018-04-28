// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("/Users/ezdeharjaber/Documents/cwru/FriendFinder/routing/htmlRoutes.js");
var apiRoutes = require("/Users/ezdeharjaber/Documents/cwru/FriendFinder/routing/apiroutes.js");

// Sets up the Express App
// =============================================================
var app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
//process.env to start up envirnment for app
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes
// =============================================================
htmlRoutes(app);
apiRoutes(app);
  
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });




//   // Displays a single character, or returns false
//   app.get("/api/characters/:character", function(req, res) {
//     var chosen = req.params.character;
  
//     console.log(chosen);
  
//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
  
//     return res.json(false);
//   });
  

