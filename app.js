var mysql      = require('mysql1');
var express = require ('express')
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

connection.query("insert into user(name) values('Irene Williams) "), function(error, results, fields){
  if (error) trow error;
  console.log('inserted')
}
 
connection.end();

