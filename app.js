var mysql      = require('mysql1');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root', 
  database : 'week7lastsql'
});
 
connection.connect();
 
connection.query('SELECT * from users', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
connection.query("insert into ")
 
connection.end();

