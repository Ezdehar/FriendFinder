var path = require("path");
//var friendData = require ("../data/friends.js");

  module.exports = function(app) {
	// Search for Specific Character (or all characters) - provides JSON
    app.get("/api/friends", function(req, res) {
        return res.json(friendData);
      });
      app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newResults = req.body;
      
        console.log(newResults);
      
        if(results.length < 5){
          results.push(newResults);
          res.json(newResults);
        }
      });      
} 
        


    
   

