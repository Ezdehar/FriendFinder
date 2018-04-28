// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var htmlRoutes = require("/../routing/htmlRoutes.js")
// var apiRoutes = require("/../routing/apiRoutes.js")

// Sets up the Express App
// =============================================================
var app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.send('Hello World');
})
//process.env to start up envirnment for app
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res) {
  res.setHeader("Content-Type", "text/plain")
  res.write("you posted:\n")
  res.end(JSON.stringify(req.body, null, 2))
});

require("./app/routing/htmlRoutes.js")(app);
// Routes
// =============================================================
htmlRoutes(app);
apiRoutes(app);
  
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("App listening on PORT " + PORT);
  });




