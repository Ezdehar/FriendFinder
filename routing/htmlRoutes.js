var path = require("path");

module.exports = function(app) {
	// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "/routing/home.html"));
});

app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "routing/home.html"));
});

app.get("/api/friends", function(req, res) {
	res.sendFile(path.join(__dirname, "/routing/home.html"));
	return res.json(characters);
});
};