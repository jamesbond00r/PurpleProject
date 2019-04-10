var mysql = require('mysql');

var connection = mysql.createConnection({
    host : '34.204.52.29',
    port : '8888',
    password : 'VYnZhYXRpFgWakwv',
    database : 'interview9',


});

    connection.connect(function(err){
        if (err) throw err;
     });

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields){
   if (error) console.log(error)
    throw error;
   console.log('The solution is: ', results[0].solution);
  });

connection.end();
