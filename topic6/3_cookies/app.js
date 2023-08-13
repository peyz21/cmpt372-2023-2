const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// Use the cookie-parser middleware
app.use(cookieParser());

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

app.get("/logout", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie has been cleared!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
