//chave ~ valor
const pessoa = {
  nome: "Luiz",
  sobrenome: "Otavio",
};

const chave = "nome";
console.log(pessoa["nome"]);
console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = "luiz";
pessoa1.sobrenome = "otavio";
console.log(pessoa1.nome, pessoa1.sobrenome);

//funções fábricas e funções construtoras
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

function Pessoa(nome, sobrenom) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
const p1 = new Pessoa("luiz", "otavio");
// new -> cria um objeto vazio
// this aponta para o objeto criado
// retorna o this
//console.log(p1) -> Pessoa { nome: 'luiz', sobrenome: 'otavio'}
//                    construtor
//Object.freeze(<objeto>)
//trava os atributos de um objeto
