//classe é a mesma coisa que funçãwo construtora

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`);
  }

  comer() {
    console.log(`${this.nome} está comendo`);
  }

  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

const p1 = new Pessoa("luiz", "otavio");
console.log(p1);
p1.falar();

//existe pq usar função construtora ou fábrica depois disso?
