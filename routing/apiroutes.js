var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var friendData = require("/Users/ezdeharjaber/Documents/cwru/FriendFinder/app/data/friends.js");

module.exports = function(app) {
// Search for Specific Character (or all characters) - provides JSON
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
    });
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    //var newFriends = req.body;
    if(friendData.length < 5){
      friendData.push(req.body);
      res.json(true);
    }
  });      
}; 
        

//         // AJAX post the data to the friends API.
//         $.post("/api/friends", userData, function(data) {

//           // Grab the result from the AJAX post so that the best match's name and photo are displayed.
//           $("#match-name").text(data.name);
//           $("#match-img").attr("src", data.photo);

//           // Show the modal with the best match
//           $("#results-modal").modal("toggle");

//         });
//       } else {
//         alert("Please fill out all fields before submitting!");
 // What does this route do?
// app.get("/api/characters/:character", function(req, res) {
//   // What does this code do?
//   var chosen = req.params.character;
//   console.log(chosen);

//   // What does this code do?
//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }
//   // What does this code do?
//   return res.send("No character found");
// });

// // Listener
// // ===========================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

   

