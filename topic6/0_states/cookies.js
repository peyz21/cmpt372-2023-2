const express = require("express");

var cookieParser = require("cookie-parser");

var app = express();
var port = 3000;
app.use(cookieParser());

app.get("/", function (req, res) {
  var cookie = req.cookies.random;

  if (cookie === undefined) {
    var randInt = Math.random().toString();
    randInt = randInt.substring(2, randInt.length);
    res.cookie("random", randInt, { maxAge: 60 * 1000, httpOnly: true });
    res.send("cookie created: " + randInt);
  } else {
    res.send("cookie exists: " + cookie);
  }
});

app.get("/setcookie", (req, res) => {
  res.cookie("username", "JohnDoe", { maxAge: 900000, httpOnly: true });
  res.send("Cookie has been set!");
});

app.get("/getcookie", (req, res) => {
  const username = req.cookies["username"];
  if (username) {
    res.send(`Hello, ${username}!`);
  } else {
    res.send("No cookie found.");
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
