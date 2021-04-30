const fs = require("fs").promises;
// const path = require("path");

// const caminhoArquivo = path.resolve(__dirname, "..", "teste.txt");

// const pessoas = [
//   { nome: "joao" },
//   { nome: "maria" },
//   { nome: "fábio" },
//   { nome: "joana" },
// ];

// const json = JSON.stringify(pessoas, "", 2);
module.exports = (dir, content) => {
  fs.writeFile(dir, content, {
    flag: "w",
    encoding: "utf-8",
  });
};

// fs.writeFile(caminhoArquivo, "frase 23", {
//   flag: "a",
//   encoding: "utf-8",
// });
