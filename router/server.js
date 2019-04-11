const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 3003;
const bodyParser = require("body-parser");
const mysql = require('mysql');
const Flatted = require('flatted');

var connection = mysql.createConnection({
    host      : '34.204.52.29',
    port      : '3306',
    user      : 'clarkr',
    password  : 'VYnZhYXRpFgWakwv',
    database  : 'interview9'
  });

connection.connect(function(err){
    if (err) console.log(err);
    console.log("Connected!");
    });



var query = connection.query('SELECT 1 + 1  AS solution', function(error, res, fields){
    if(error) console.log(error)
    console.log(res[0])
       return (res[0]);
});

connection.end();


app.all('/', function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) =>{
 return  res.send(`query ${query}`);
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

