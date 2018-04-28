var path = require("path");
var characters = [
    {
      routeName: "yoda",
      name: "Yoda",
      role: "Jedi Master",
      age: 900,
      forcePoints: 2000
    },
    {
      routeName: "darthmaul",
      name: "Darth Maul",
      role: "Sith Lord",
      age: 200,
      forcePoints: 1200
    },
    {
      routeName: "obiwankenobi",
      name: "Obi Wan Kenobi",
      role: "Jedi Master",
      age: 55,
      forcePoints: 1350
    }
  ];
  
module.exports = function(app) {
	// Basic route that sends the user first to the AJAX Page
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "view.html"));
	  });
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "home.html"));
	});
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "survey.html"));
	});
};