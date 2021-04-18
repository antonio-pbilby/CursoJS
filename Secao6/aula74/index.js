function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
//não funciona com arrow function
Pessoa.prototype.nomeCompleto2 = () => {
  return `${this.nome} ${this.sobrenome}`;
};
// instância
const pessoa1 = new Pessoa("luiz", "o");
const pessoa2 = new Pessoa("Maria", "s");

console.log(pessoa1.nomeCompleto());
console.log(pessoa1.nomeCompleto2());
//function prototype
//serve para reutilizar métodos para que
//a cada instancia de Pessoa()
//não se repita a construção do método .nomeCompleto()
