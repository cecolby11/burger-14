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

  selectWhere: function(tableName, criteriaCol, value, func) {
    connection.query('SELECT * FROM ?? WHERE ?? = ?', [tableName, criteriaCol, value], function(error, data) {
      if(error) {
        console.log(error);
      } else {
        func(data); // callback
      }
    });
  },

  // cols and values can be arrays or single items
  insertOne: function(tableName, cols, values, func) {
    connection.query('INSERT INTO ?? (??) VALUES (?)', [tableName, cols, values], function(error, data) {
      if(error) {
        console.log(error);
      } else {
        func(data); //callback
      }
    });
  }, 

  updateOne: function(tableName, criteriaCol, criteriaVal, updateColName, newValue, func) {
    // TODO
    connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?', [tableName, updateColName, newValue, criteriaCol, criteriaVal], function(error, data) {
      if(error) {
        console.log(error);
      } else {
        func(data); //callback
      }
    });
  }, 

  deleteOne: function(tableName, criteriaCol, criteriaVal, func) {
    connection.query('DELETE FROM ?? WHERE ?? = ?', [tableName, criteriaCol, criteriaVal], function(error, data) {
      if(error) {
        console.log(error);
      } else {
        func(data); // callback
      }
    });
  }
};

module.exports = orm;