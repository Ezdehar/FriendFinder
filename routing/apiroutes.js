var path = require("path");
var express = require("express");

  module.exports = function(app) {
	// Search for Specific Character (or all characters) - provides JSON
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
      });
      app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var friends = req.body;
      
        console.log(results);
      
        if(results.length < 5){
          results.push(newResults);
          res.json(newResults);
        }
      });      
}; 
        


    
   

