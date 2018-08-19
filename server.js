//Your server.js file should require the basic npm packages we've used in class:
//express, body-parser and path.


// DEPENDENCIES // NPM packages for server 
var express = require("express");

var bodyParser = require("body-parser");

var path = require ("path");

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express application to handle the data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// The below code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
