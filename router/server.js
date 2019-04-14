
const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 3051;
const bodyParser = require("body-parser");
const mysql = require('mysql');


  var connection = mysql.createConnection({
    host      : '34.204.52.29',
    port      : '3306',
    user      : 'clarkr',
    password  : 'VYnZhYXRpFgWakwv',
    database  : 'interview9'
  });

connection.connect(function(err){
    if(err) console.log(err);
    console.log("Connected!");
    });



app.all('/*', function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","GET,HEAD,POST,DELETE");
    next()
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.get('/*', function(req, res, next) {
	     connection.query('SELECT *  FROM Username', function(error, results, fileds){
           if(error){
		res.send(JSON.stringify({"Status": 500, "error": error, "response": null}));
           } else {
           res.send(results);
           //connection.end()
        }
});

});
  


app.post('/', function(req, res, next) {
		function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
	var add  = makeid(5);
	var email = add+"@gmail.com"
            connection.query('INSERT INTO Username (first_name, email) VALUES("'+ add +'","'+ email +'")', function(error, results, fields){
             if(error) console.log(error)
            return  res.send("added");
});
});


app.put('/put', function(req, res, next) {
         name =  Yoshi;
	num = 4;
	 connection.query('UPDATE INTO  SET first_name ="'+name+'"  WHERE name_id ="'+ num +'")', function(error, results, fields){
             if(error) console.log(error)
            return  res.send("Updated");
});
});



app.delete('/delete/*', function(req, res, next) {
		
connection.query("DELETE FROM test WHERE name_id="+req.body.id+'', function(error, results, fields){
            if(error) console.log(error)
            return  res.send("It worked");
});
});



 //Catches all for urls
app.get('*', (req, res) => res.sendFile(__dirname+ '/404.html'))






 

app.listen(port, () => console.log(`Server has started on ${port}`))

