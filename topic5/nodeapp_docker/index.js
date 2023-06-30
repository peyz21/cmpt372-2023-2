const express = require('express')
const {Pool} = require('pg')

var pool

pool = new Pool({
    user: 'postgres',
    host: 'db',
    password: 'root'
})

const PORT = 3000

const app = express()

app.get('/insert', async(requ,resp) => {
    console.log(requ.method)
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS users (pid serial, fname varchar(255),lname varchar(255),age integer)`)
        await pool.query(`INSERT INTO users (fname,lname,age) VALUES ($1,$2,$3)`,['Tester','McTesty',40])
        resp.send(`SUCCESS`)
    }
    catch (e) {
        resp.end(e)
    }
    
})

app.get('/users', async(requ,resp) => {
    console.log(requ.method)
    try {
        res = await pool.query(`SELECT * FROM users`)
        resp.json(res.rows)
    }
    catch (e) {
        resp.end(e)
    }
})

app.listen(PORT, '0.0.0.0')
console.log(`Running on port ${PORT}`)
