var express = require("express");
var cors = require("cors"); // cross-origin resource sharing
var app = express();

var users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use("/", cors());

app.get("/users-api", function(req, res) {
	res.json(users); 
});

app.post("/users-api", function(req, res) {
    users.push(req.body);
    res.json(users);
});

app.delete("/users-api/:user", function(req, res) {
    users = users.filter(function(people) {
        return ((people.fname !== req.body.fname) || (people.lname !== req.body.lname));
    });
    res.json(users);
});

app.listen(3000);
console.log("Express app running on port 3000");

module.exports = app;
