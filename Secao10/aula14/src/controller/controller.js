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
  return res.render("index");
}

module.exports = paginaInicial;