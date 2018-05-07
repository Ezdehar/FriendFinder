var express = require("express");
var path = require("path");
 
module.exports = function(app) {
var userData = [
      {
      "name":"Ahmed",
      "photo":"https://media.licdn.com/dms/image/C5603AQG6VYstsbh80w/profile-displayphoto-shrink_200_200/0?e=1530748800&v=beta&t=2OmT_L2JdzSqNmEH8mzd1AZc6IuRJijkbjap38SA13E",
      "scores":[
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
      "name":"Ahmed",
      "photo":"https://media.licdn.com/dms/image/C5603AQG6VYstsbh80w/profile-displayphoto-shrink_200_200/0?e=1530748800&v=beta&t=2OmT_L2JdzSqNmEH8mzd1AZc6IuRJijkbjap38SA13E",
      "scores":[
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
    return userData;
  };

