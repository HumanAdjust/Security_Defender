var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3308,
    database : 'security'
  });
  
  connection.connect();
  
connection.query('SELECT * from book', function(err, rows, fields) {
  if (!err)
          console.log('The solution is: ', rows);
        else
          console.log('Error while performing Query.', err);
      });
      
connection.end();