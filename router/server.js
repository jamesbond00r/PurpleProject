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



app.all('/*', function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","GET,HEAD,POST,DELETE");
    next()
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



app.get('/', function(req, res, next) {
	     connection.query('SELECT name FROM test', function(error, results, fileds){
           if(error){
		res.send(JSON.stringify({"Status": 500, "error": error, "response": null}));
           } else {
           res.send(res);
           //connection.end()
        }
});

});
  


app.post('/post*', function(req, res, next) {
		var name = res.body.user
            connection.query('INSERT INTO  test (name) VALUES('+name+')', function(error, results, fields){
             if(error) console.log(error)
            return  res.send("added");
});
});


app.put('/put*', function(req, res, next) {
         var name = res.body.user   
	var num = res.body.num
	 connection.query("UPDATE test SET name ='"+name+"'  WHERE name_id ="+num , function(error, results, fields){
             if(error) console.log(error)
            return  res.send("Updated");
});
});



app.delete('/delete*', function(req, res, next) {
	var id = req.body.id
	 connection.query("DELETE FROM test WHERE name_id="+id+'', function(error, results, fields){
             if(error) console.log(error)
		
            return  res.send(req.body);
});
});



 //Catches all for urls
app.get('*', (req, res) => res.sendFile(__dirname+ '/404.html'))






 

app.listen(port, () => console.log(`Server has started on ${port}`))

