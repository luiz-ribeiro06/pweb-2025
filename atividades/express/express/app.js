const express = require("express");
const app = express();
const port = 3000;

app.get("/about", (req, res) => {
  res.send("This is just a simple example app.");
});

app.post("/data", (req, res) => {
  res.send("I'm not selling your data... probably.");
});

app.get("/users", (req, res) => {
  res.send("I don't know what to say here. Users exist.");
});

app.get("/users/:id", (req, res) => {
  res.send("Here's your ID: idk");
})

app.get("users/signin", (req, res) => {
  res.send("Sign In");
});

app.get("users/signup", (req, res) => {
  res.send("Sign Up");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
})
