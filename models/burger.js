// DEPENDENCIES
var orm = require('../config/orm.js');

// call the ORM functions using burger specific input for the ORM.
var burger = {
  all: function(callback) {
    orm.selectAll('burgers', function(data) {
      callback(data); // do something with the burger data in the views
    });
  }, 

  // cols and vals can be arrays if multiple columns or single items if just burger_name (must match)
  create: function(cols, vals, callback) {
    orm.insertOne('burgers', cols, vals, function(data) {
        callback(data); // do something with the data returned in the view? 
    });
  },

  update: function(objColVals, condition, callback) {
    // TODO: edit orm.updateOne so it can meet multiple conditions and set multiple column/value pairs
    // TODO
  }

};

module.exports = burger;



// =============DELETE LATER =============// 

/* working calls of the above functions */
burger.all(function(data) {console.log(data)});
burger.create(['burger_name', 'devoured'], ['test-burger', 1], function(data) {console.log('inserted at ' + data.insertId);});


/*  working standalone orm calls */

// orm.selectAll('burgers', function(data) {
//     console.log(data)
// });

// orm.insertOne('burgers', 'burger_name', 'batburger', function(data) {
//   console.log('inserted new item at id ' + data.insertId);
// });

// orm.insertOne('burgers', ['burger_name','devoured'], ['test', 1], function(data) {
//   console.log('inserted new item at id ' + data.insertId);
// });

// orm.updateOne('burgers', 'id', '4', 'burger_name', 'BBQ', function(data) {
//   console.log('updated!');
// });