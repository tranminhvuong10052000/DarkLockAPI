require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.POST || 3000
const morgan = require('morgan')
const path = require('path')
const database = require('./configuration/database')
const router = require('./routers')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.use(morgan('combined'))
app.use('/static', express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, 'public'))

database.connect()
router(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})