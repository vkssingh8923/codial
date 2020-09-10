const express = require('express')
const app = express()
const port = 3000
const path =require('path')
const expressejs = require('express-ejs-layouts')

app.set('view engine','ejs')
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)
app.set('views',path.join(__dirname,'views'))

app.use(expressejs)
app.use('/',require('./routes'))
app.use(express.static('./assets'))





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})