require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.POST || 3000

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})