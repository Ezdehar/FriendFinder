var express = require('express');
var friends = require("/Users/ezdeharjaber/Documents/cwru/FriendFinder/app/data/friends.js");

module.exports = function(app) {
// Search for Specific Character (or all characters) - provides JSON
  app.get("/api/friends", function(req, res) {
    res.json(friends);
    //console.log(friends);
  });
  
  app.post("/api/friends", function(req, res) {
    //req.body hosts is equal to the JSON post sent from the users
      var newFriends = friends();
      if (newFriends.length < 5) {
        newFriends.push(req.body);
        return res.json(true);      
       }
   });
}; 
     

     // var user1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
      // var user2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1];
      
      // return JSON.stringify(scores, [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]);
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



        


 
