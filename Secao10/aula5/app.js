const path = require("path");
const writeFile = require("./modules/escrever");
const fsReadFile = require("./modules/ler");

const caminhoArquivo = path.resolve(__dirname, "teste.json");

const pessoas = [
  { nome: "joao" },
  { nome: "maria" },
  { nome: "fábio" },
  { nome: "joana" },
];

const json = JSON.stringify(pessoas, "", 2);

// writeFile(caminhoArquivo, json);
async function readFile(dir) {
  const file = await fsReadFile(dir);

  renderFiles(file);
}

function renderFiles(file) {
  const newFile = JSON.parse(file);
  console.log(newFile);
}

readFile(caminhoArquivo);
