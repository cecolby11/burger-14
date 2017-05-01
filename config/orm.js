var connection = require('./connection.js');

var orm = {

  selectAll: function() {
    connection.query('SELECT * FROM burgers', function(error, data) {
      console.log(data);
    });
  },

  insertOne: function() {
    // TODO
  }, 

  updateOne: function() {
    // TODO
  }
};

module.exports = orm;