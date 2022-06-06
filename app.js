const express = require('express');
const app = express()
const path = require('path')
const router = require('./routes/myRouter')
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(session({secret:'mysession',resave:false,saveUninitialized:false}))
app.use(router)
app.use(express.static(path.join(__dirname, 'public')))

let port = process.env.PORT;
if(port == null || port == ""){
    port = 4000
}
app.listen(port, () => {
    console.log('server is start',4000)
})