const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 3001

app.get('/', (req, res) => res.send('Hello Purple wave!'))



 //Catches all for urls
app.get('*', (req, res) => res.sendFile(__dirname+ '/404.html'))


app.listen(port, () => console.log(`Server has started on ${port}`))
