const express = require('express')
const app = express()
const port = 3000
const path =require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))


app.use('/',require('./routes'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})