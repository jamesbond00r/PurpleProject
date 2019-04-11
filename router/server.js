const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 3003;
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
	     connection.query('SELECT * FROM test', function(error, results, fileds){
           if(error) console.log(error);
           res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
});

});
  

app.post('/', (req, res) => {
	 res.send('Received a POST Method');
});

app.put('/', (req,res) => {
	return res.send('Received a PUT Method');
});

app.delete('/', (req,res) => {
	return res.send("Received a DELETE Method");
});

 //Catches all for urls
app.get('*', (req, res) => res.sendFile(__dirname+ '/404.html'))






 

app.listen(port, () => console.log(`Server has started on ${port}`))

