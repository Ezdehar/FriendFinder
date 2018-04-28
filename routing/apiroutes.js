var characters = [
    {
      routeName: "yoda",
      name: "Yoda",
      role: "Jedi Master",
      age: 900,
      forcePoints: 2000
    },
    {
      routeName: "darthmaul",
      name: "Darth Maul",
      role: "Sith Lord",
      age: 200,
      forcePoints: 1200
    },
    {
      routeName: "obiwankenobi",
      name: "Obi Wan Kenobi",
      role: "Jedi Master",
      age: 55,
      forcePoints: 1350
    }
  ];
  module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
        return res.json(characters);
      });
      
      app.post("/api/characters", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newfriends = req.body;
      
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newFriends.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(newfriends);
      
        characters.push(newfriend);
      
        res.json(newfriend);
      });
    };  
    


    
   

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
  