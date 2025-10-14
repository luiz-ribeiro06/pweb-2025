const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const magicRouter = require('./routes/magic');
const usersRouter = require('./routes/users');

const app = express();

// Configuração do mecanismo de visualização (EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares básicos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Rotas principais
app.use('/', indexRouter);
app.use('/magic', magicRouter);
app.use('/users', usersRouter);

// Tratamento de 404 (página não encontrada)
app.use((req, res) => {
  res.status(404).render('error', { message: 'Página não encontrada!' });
});

// Inicia o servidor
const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
