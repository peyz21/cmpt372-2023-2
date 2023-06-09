const { Pool } = require('pg')
var pool

// method 1
/*
pool = new Pool({
    connectionString: 'postgres://postgres:password@localhost/cmpt372'
})
*/

// method 2

// PGUSER=postgres PGHOST=localhost PGPASSWORD=password PGDATABASE=cmpt372 node postgres.js
pool = new Pool()

// method 3
/*
pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cmpt372',
    password: 'password'
})
*/

const myfunc = async()=>{
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS users (pid serial,fname varchar(255))`)
        const res = await pool.query(`SELECT now()`);
        console.log(res.rows)
    } catch (e) {
        console.error(e)
    }
}

myfunc()

var sql = require('yesql').pg

pool.query(sql("SELECT * FROM users")({}))