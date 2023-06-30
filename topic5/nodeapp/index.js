const express = require('express')

const PORT = 3000

const app = express()

app.get('/insert', async(requ,resp) => {
    console.log(requ.method)
    resp.send(`INSERT`)
})

app.get('/users', async(requ,resp) => {
    console.log(requ.method)
    resp.send(`USERS`)
})

app.listen(PORT, '0.0.0.0')
console.log(`Running on port ${PORT}`)
