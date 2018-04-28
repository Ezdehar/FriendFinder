var path = require("path");

module.exports = function(app) {
	// Basic route that sends the user first to the AJAX Page
	app.get("/", function(req, res) {
	  // res.send("Welcome to the Star Wars Page!")
	  //__dirname is current folder were calling from 
	  res.sendFile(path.join(__dirname, "/assets/home.html"));
	});

	// Basic route that sends the user first to the AJAX Page
	app.get("/tables", function(req, res) {
	  // res.send("Welcome to the Star Wars Page!")
	  res.sendFile(path.join(__dirname, "/assets/view.html"));
	});

	// Displays page that allows you to add a new character
	app.get("/reserve", function(req, res) {
	  res.sendFile(path.join(__dirname, "/assets/add.html"));
	});
};