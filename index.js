const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser');
const path =require('path')
const expressejs = require('express-ejs-layouts')
const mongooseConnection =require('./config/mongoose')

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'))


app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

app.use(expressejs)
app.use('/',require('./routes'))

app.set('view engine','ejs')

app.set('views',path.join(__dirname,'views'))





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})