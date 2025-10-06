const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`Acesso em: ${req.path} - ${new Date().toLocaleString()}`);
  next();
});

function aboutMiddleware(req, res, next) {
  console.log("Rota: /about");
  next();
}

function dataMiddleware(req, res, next) {
  console.log("Rota: /data");
  next();
}

function signinMiddleware(req, res, next) {
  console.log("Rota: /users/signin");
  next();
}

function signupMiddleware(req, res, next) {
  console.log("Rota: /users/signup");
  next();
}

app.get("/about", aboutMiddleware, (req, res) => {
  res.send("Página: About");
});

app.post("/data", dataMiddleware, (req, res) => {
  res.send("Página: Data");
});

app.get("/users", (req, res) => {
  res.redirect("/users/signup");
});

app.get("/users/:userid", (req, res) => {
  const userId = req.params.userid;
  res.send(`Bem-vindo, usuário ${userId}!`);
});

app.get("/users/signin", signinMiddleware, (req, res) => {
  res.send("Página: Sign In");
});

app.get("/users/signup", signupMiddleware, (req, res) => {
  res.send("Página: Sign Up");
});

app.use((req, res) => {
  res.status(404).send('<h1>404 - Página não encontrada</h1><a href="/">Voltar ao início</a>');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
