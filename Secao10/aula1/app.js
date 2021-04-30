/**
 * para módulos padrões ou pacotes instalados
 * pelo nodeJS, não é necessário especificar
 * um caminho/diretório, somente o nome do pacote
 * mas é sempre bom checar a documentação, por via de
 * dúvidas
 */
// const path = require("path");
// const axios = require("axios");

const mod1 = require("./mod1");
//require pega as exportações do "./mod1"
const p1 = new mod1.Pessoa("Luiz");
console.log(p1);

// axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
//   .then((response) => console.log(response.data))
//   .catch((e) => console.log(e));
