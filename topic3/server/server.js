var express = require('express')
var serveIndex = require('serve-index')
var app = express()
var path = require('path')

var options = {
    dotfiles:'ignore',
    extensions: ['htm','html','json']
}

var users = []

// template engines
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//parsing body
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/', express.static('./pub_html', options))
app.use('/', function(req,res,next){
    console.log(req.method, 'request:', req.url, 
       JSON.stringify(req.body))
    next()
}) 
app.use('/files', serveIndex('pub_html/files', {'icons':true}))

app.get('/users-api', function(req,res){
    res.json(users)
})

app.post('/users-api', function(req,res){
    users.push(req.body)
    res.json(users)
})

app.delete('/users-api/:id', function(req,res){
    var pid = req.params.id
    users = users.filter(function(person){
        return person.pid != pid
    })
    res.json(users)
})

// templating
app.get('/hellooooo',function(req,res){
    res.render('hello', {result:users})
})

app.listen(8080, function(){
    console.log(`app is running on port 8080`)
})