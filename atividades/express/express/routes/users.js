const express = require("express");
const router = express.Router();

function signinMiddleware(req, res, next) {
  console.log("Rota: /users/signin");
  next();
}

function signupMiddleware(req, res, next) {
  console.log("Rota: /users/signup");
  next();
}

router.get("/", (req, res) => {
  res.redirect("/users/signup");
});
router.get("/:userid", (req, res) => {
  const userId = req.params.userid;
  res.send(`Bem-vindo, usuário ${userId}!`);
});

router.get("/signin", signinMiddleware, (req, res) => {
  res.send("Página: Sign In");
});

router.get("/signup", signupMiddleware, (req, res) => {
  res.send("Página: Sign Up");
});

module.exports = router;
