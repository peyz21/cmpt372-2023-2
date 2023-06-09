var express = require('express')
var serveIndex = require('serve-index')
var app = express()
var path = require('path')

var upload = require('express-fileupload')

const { Pool } = require('pg')
var pool = new Pool({connectionString: 'postgres://postgres:password@localhost/cmpt372'})

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

// upload files
app.use(upload())

app.use('/', express.static('./pub_html', options))
app.use('/', function(req,res,next){
    console.log(req.method, 'request:', req.url, 
       JSON.stringify(req.body))
    next()
}) 
app.use('/files', serveIndex('pub_html/files', {'icons':true}))

app.get('/users-api', function(req,res){
    // get from db
    var allUsersQuery = `SELECT * FROM users`
    pool.query(allUsersQuery, (err,result)=>{
        if (err){
            res.end(err)
        }
        users = result.rows
        res.json(result.rows)
    })
    // res.json(users)
})

app.post('/users-api', async(req,res)=>{
    users.push(req.body)
    var fname = req.body.fname
    var lname = req.body.lname
    var pid = req.body.pid
    try {
        var addUserQuery = `INSERT INTO users values ($1,$2,$3)`
        const result = await pool.query(addUserQuery,[pid,fname,lname])
        res.redirect('/users-api')
    } catch (e) {
        res.end(e)
    }
    // res.json(users)
})

app.delete('/users-api/:id', function(req,res){
    var pid = req.params.id
    users = users.filter(function(person){
        return person.pid != pid
    })
    // call the DB to delete user id = pid

    res.json(users)
})

// templating
app.get('/hellooooo',function(req,res){
    res.render('hello', {result:users})
})

// images upload
app.post('/upload', function(req,res){
    console.log(req.files.myImage)
})

app.listen(8080, function(){
    console.log(`app is running on port 8080`)
})