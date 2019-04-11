var mysql = require('mysql');

var connection = mysql.createConnection({
    host :'34.204.52.29',
    port : '3306',
    user  : 'clarkr',
    password : 'VYnZhYXRpFgWakwv',
    database : 'interview9'


});

    connection.connect(function(err){
        if (err) console.log(err);

	console.log("Connected!");
     });


connection.end();
