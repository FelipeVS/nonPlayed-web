var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//Create application
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use("/", express.static(__dirname + "/client/app"));

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

// Connect to MongoDB
mongoose.connect('mongodb://localhost/npdb');
mongoose.connection.once('open', function(){

  // Load the models
  app.models = require('./models/index');

  // Load the routes
  var routes = require('./routes');
  _.each(routes, function(controller, route){
    app.use(route, controller(app,route));
  });

  console.log('Listening on port 3000...');
  app.listen(3000);
});
