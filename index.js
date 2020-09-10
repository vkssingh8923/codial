const express = require('express')
const app = express()
const port = 3000
const path =require('path')
const expressejs = require('express-ejs-layouts')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(expressejs)
app.use(express.static('public'))
app.use('/',require('./routes'))




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})