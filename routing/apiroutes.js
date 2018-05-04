var path = require("path");
var express = require("express");
var friends = require("/Users/ezdeharjaber/Documents/cwru/FriendFinder/app/data/friends.js");

module.exports = function(app) {
// Search for Specific Character (or all characters) - provides JSON
  app.get("/api/friends", function(req, res) {
    res.json(friends);
    });

  app.post("/api/friends", function(req, res) {
  //   // req.body hosts is equal to the JSON post sent from the users
  //   // This works because of our body-parser middleware
    if (friends.length < 5) {
      friends.push(req.body);
      res.json(true);
    }
  });  


}; 
        



