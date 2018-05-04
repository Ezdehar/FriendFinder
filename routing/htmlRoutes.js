var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");

module.exports = function(app) {
	
	// Basic route that sends the user first to the AJAX Page
	app.get("/survey", function(req, res) {
		return res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});
	app.get("*", function(req, res) {
		return res.sendFile(path.join(__dirname, "/../public/home.html"));
	  });
};



