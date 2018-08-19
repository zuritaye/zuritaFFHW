//Your htmlRoutes.js file should include two routes:
  //A GET Route to /survey which should display the survey page.
  //A default, catch-all route that leads to home.html which displays the home page.

// Dependencies
  var path = require('path');
  
// ROUTING
  module.exports = function(app){
// app get route that leads home.html and displays the home page
    app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
  
// app use route to home page
    app.use(function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
  };