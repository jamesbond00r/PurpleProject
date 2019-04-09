const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello Purple wave!'))

app.listen(port, () => console.log(`Server has started on ${port}`))
