// DEPENDENCIES
var orm = require('../config/orm.js');

// TODO
// create the code that will call the ORM functions using burger specific input for the ORM.
orm.selectAll('burgers', function(data) {
  console.log(data)
});

orm.insertOne('burgers', 'burger_name', 'batburger', function(data) {
  console.log('inserted new item at id ' + data.insertId);
});

orm.updateOne('burgers', 'id', '4', 'burger_name', 'BBQ', function(data) {
  console.log('updated!');
})


