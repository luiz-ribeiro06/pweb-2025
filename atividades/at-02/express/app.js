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

app.get("/about", aboutMiddleware, (req, res) => {
  res.send("Página: About");
});

app.post("/data", dataMiddleware, (req, res) => {
  res.send("Página: Data");
});

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.use((req, res) => {
  res.status(404).send('<h1>404 - Página não encontrada</h1><a href="/">Voltar ao início</a>');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
