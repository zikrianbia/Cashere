const express = require('express')
const app = express()
const PORT = 3000;
const session = require('express-session')
const router = require('./routes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.use(router)

app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`)
})