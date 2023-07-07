const express = require('express')
var app = express()
var port = 3000

var cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/', function(req,res){
    var cookie = req.cookies.random

    if (cookie === undefined){
        var randInt = Math.random().toString()
        randInt = randInt.substring(2,randInt.length)
        res.cookie('random',randInt,{ maxAge: 60*1000, httpOnly:true })
        res.send('cookie created: ' + randInt)
    }
    else {
        res.send('cookie exists: ' + cookie)
    }
    
    
})

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
})
