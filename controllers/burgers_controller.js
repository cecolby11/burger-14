// DEPENDENCIES
var express = require('express');
var burger = require('../models/burger.js');

// ROUTES
var router = express.Router();

// display main page with devoured and undevoured burgers
router.get('/', function(request, response) {
  // get devoured burgers
  burger.allDevoured(function(data) {
    // store it in object at devoured key in callback
    console.log(data);
    var burgers = {
      devoured: data
    }
    // get undevoured burgers
    burger.allUndevoured(function(data) {
      // add into object at undevoured key in callback
      burgers.undevoured = data;
      response.render('index', burgers);
    });
  });
});

// add new burger
router.post('/', function(request, response) {
  burger.create(request.body.burger_name, function(data) {
    // redirect in callback so new burger is displayed appropriately 
    response.redirect('/');
  });
});

module.exports = router;
