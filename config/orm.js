var connection = require('./connection.js');

var orm = {

  selectAll: function(tableName, func) {
    connection.query('SELECT * FROM ??', tableName,function(error, data) {
      if(error) {
        console.log(error);
      } else {
        func(data); //callback
      }
    });
  },

  insertOne: function(tableName, colName, value, func) {
    connection.query('INSERT INTO ?? (??) VALUES (?) ', [tableName, colName, value], function(error, data) {
      if(error) {
        console.log(error);
      } else {
        func(data); //callback
      }
    })
  }, 

  updateOne: function(tableName, criteriaCol, criteriaVal, updateColName, newValue, func) {
    // TODO
    connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?', [tableName, updateColName, newValue, criteriaCol, criteriaVal], function(error, data) {
      if(error) {
        console.log(error);
      } else {
        func(data);
      }
    });
  }

};

module.exports = orm;