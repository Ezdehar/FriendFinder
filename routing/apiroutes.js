var path = require("path");
var friendData = require ("../data/friends.js");

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
        


    
   

//   app.get("/api/:characters?", function(req, res) {
//     var chosen = req.params.characters;
  
//     if (chosen) {
//       console.log(chosen);
  
//       for (var i = 0; i < characters.length; i++) {
//         if (chosen === characters[i].routeName) {
//           return res.json(characters[i]);
//         }
//       }
//       return res.json(false);
//     }
//     return res.json(characters);
//   });
  
//   // Create New Characters - takes in JSON input
//   app.post("/api/new", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body-parser middleware
//     var newcharacter = req.body;
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(newcharacter);
  
//     characters.push(newcharacter);
  
//     res.json(newcharacter);
//   });
  