const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser');
const path =require('path')
const expressejs = require('express-ejs-layouts')
const mongooseConnection =require('./config/mongoose')
const session =require('express-session')
const passport = require('passport')
const passportlocal = require('./config/passport-local-strategy');
const { Passport } = require('passport');
const  MongoDBStore = require('connect-mongo')(session);
const sassMiddleware = require('node-sass-middleware')

app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}));
app.use(express.urlencoded());
app.use(cookieParser());
app.use(expressejs)


app.set('layout extractStyles',true)
app.set('layout extractScripts',true)


app.set('view engine','ejs')

app.set('views',path.join(__dirname,'views'))

app.use(session({
  name:'codial',
  secret:'something',
  saveUninitialized:false,
  resave:false,
  cookie:{
    maxAge:(20*20000)
  },
  store:new MongoDBStore({
    mongooseConnection:mongooseConnection,
    autoremove:'disable'
  },function(err){console.log(err || "ok")})
}));

app.use(passport.initialize());
app.use(passport.session())



app.use(express.static('./assets'))



app.use(passport.setUserViews)

app.use('/',require('./routes'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})