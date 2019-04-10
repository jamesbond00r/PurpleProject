const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 3001;
const bodyParser = require("body-parser");

app.all('/', function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello Purple wave!'))

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


/*var mysql = require('mysql');

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

connection.end(); */

app.listen(port, () => console.log(`Server has started on ${port}`))

