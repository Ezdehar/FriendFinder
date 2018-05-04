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
        

