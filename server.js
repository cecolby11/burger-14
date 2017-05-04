// DEPENDENCIES 
var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();
var PORT = 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');
app.use('/' , routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
