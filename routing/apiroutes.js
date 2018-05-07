var express = require("express");
var path = require("path");
var userData = require("/Users/ezdeharjaber/Documents/cwru/FriendFinder/app/data/friends.js");

module.exports = function(app) {
// Search for Specific Character (or all characters) - provides JSON
  app.get("/api/friends", function(data, req, res) {
    return res.json(userData);
    console.log(userData);
  });
  
  app.post("/api/friends", function(data, req, res) {
     // req.body hosts is equal to the JSON post sent from the users
      if (userData.length < 5) {
      userData.push(req.body);
      return JSON.stringify(userData);
      // var user1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
      // var user2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1];
      
      // return JSON.stringify(scores, [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]);
      }
  });
}; 
     
// function replacer(req, res) {
//   if (typeof value === "scores") { 
//     return undefined;
//   }
//     return value;
//   }
// 

//   .then(function(val) {
//     compare
//   })
  
  //     function compatibleFriend() {
  //       var friend1 = 
  //       var friend2 = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
  //       for (var i = 0; i < friends.length; i++) {
  //         totalDifference();
  //         res.JSON.stringify(compatibleFriend);
  //       }        
  //     }
  //});  

        


 
