// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("/routing/htmlRoutes")
var apiRoutes = require("/routing/apiRoutes")
//path is a core module so no need to npm 

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
//process.env to start up envirnment for app
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// =============================================================
htmlRoutes(app);
apiRoutes(app);


  
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
  

// Starts the server to begin listening
// =============================================================
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });