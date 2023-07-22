var express = require('express');
var app = express();
app.use(require('sanitize').middleware);
app.get('/ping', function(req, res) {
    console.log(req.queryString('name'))
    var name = req.queryString('name');

	res.send('santized ' + name);
    console.log(name)
});
// SQL injection:
app.post('/add', async(req,res)=>{
    sql = `INSERT INTO users VALUES($1,$2)`
    await pool.query(sql,['fff','nnn'])
})
app.listen(8080);