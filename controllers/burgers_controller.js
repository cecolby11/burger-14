// DEPENDENCIES
var express = require('express');
var burger = require('../models/burger.js');

// ROUTES
var router = express.Router();

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

module.exports = router;
