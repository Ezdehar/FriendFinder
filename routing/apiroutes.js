// =============================================================
var tables = [
  {
    name: "yoda",
    phoneNumber: "555-555-5555",
    email: "joda@jedi.com",
    uniqueId: "Yoda"
  }
];

var waitlist = [
  {
    name: "yoda",
    phoneNumber: "555-555-5555",
    email: "joda@jedi.com",
    uniqueId: "900"
  }
];

module.exports = function(app) {
  // Displays all characters
  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  // Displays all characters
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

  app.post("/api/clear", function(req, res){
    tables = [];
    waitlist = [];
    res.send("Reservations removed");
  });

  app.delete("/api/clear/:item", function(req, res){
    console.log(item);
    res.send("Reservation removed");
  });


  // Create New Characters - takes in JSON input
  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;

    console.log(newReservation);

    if(tables.length < 5){
      tables.push(newReservation);
      res.json(newReservation);
    } else {
      waitlist.push(newReservation);
      res.json(false);
    }
  });
};