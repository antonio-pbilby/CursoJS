// const HomeModel = require("../models/HomeModel");

// HomeModel.create({
//   titulo: "um titulo de testes",
//   descricao: "uma descricao de testes"
// })
//   .then((dados) => {
//     console.log(dados);
//   })
//   .catch((e)=> console.log(e));

const paginaInicial = (req, res) => {
  req.session.usuario = { nome: "luiz", logado: true};
  return res.render("index");
}

module.exports = paginaInicial;