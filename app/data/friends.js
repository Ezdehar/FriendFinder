var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
//var friendData = require("/data/friends");

//module.exports = function(app) {
var friendData = [
    {  
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        "scores": [
                    5,
                    1,
                    4,
                    4,
                    5,
                    1,
                    2,
                    5,
                    4,
                    1
                  ]
    },
    {  
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        "scores": [
                    5,
                    1,
                    4,
                    4,
                    5,
                    1,
                    2,
                    5,
                    4,
                    1
                  ]
    }
];
module.exports = friendData;



// // What does this route do?
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
