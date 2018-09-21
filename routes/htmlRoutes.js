//Your htmlRoutes.js file should include two routes:
  //A GET Route to /survey which should display the survey page.
  //A default, catch-all route that leads to home.html which displays the home page.

// Dependencies
  var path = require('path');
  
// ROUTING
  module.exports = function(app){
// GET Route to /survey that will display survey page 
    app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
  
// Default route that directs to home page 
    app.get("*",function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
  };