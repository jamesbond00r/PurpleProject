const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 3050;
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



app.all('/', function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', function(req, res, next) {
	     connection.query('SELECT name FROM test', function(error, results, fileds){
           if(error){
		res.send(JSON.stringify({"Status": 500, "error": error, "response": null}));
           } else {
           res.send({test : results})
           //connection.end()
        }
});

});
  
var rand = Math.floor(Math.random()*11);

app.post('/', function(req, res, next) {
            connection.query('INSERT INTO  test (name) VALUES("guy")', function(error, results, fields){
             if(error) console.log(error)
            return  res.send("It worked");
});
});


app.put('/', function(req, res, next) {
            connection.query("UPDATE test SET name ='Updated'  WHERE name_id = 2", function(error, results, fields){
             if(error) console.log(error)
            return  res.send("Updated");
});
});

app.delete('/', function(req, res, next) {
            connection.query("DELETE FROM test WHERE name_id =2", function(error, results, fields){
             if(error) console.log(error)
            return  res.send("Delete");
});
});



 //Catches all for urls
app.get('*', (req, res) => res.sendFile(__dirname+ '/404.html'))






 

app.listen(port, () => console.log(`Server has started on ${port}`))

