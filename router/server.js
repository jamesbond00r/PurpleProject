const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 3001;
const bodyParser = require("body-parser");

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


app.listen(port, () => console.log(`Server has started on ${port}`))
