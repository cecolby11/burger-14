// DEPENDENCIES
var mysql = require('mysql');

// DB CONNECTION
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password: '',
  database: 'burgers_db'
});

connection.connect(function(error) {
  if(error) {
    console.log(error);
  } else {
    console.log('database connected at id ' + connection.threadId);
  }
});

module.exports = connection;