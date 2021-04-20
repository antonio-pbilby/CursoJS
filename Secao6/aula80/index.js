function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} está falando`);
    },
    comer() {
      console.log(`${this.nome} está comendo`);
    },
    beber() {
      console.log(`${this.nome} está bebendo`);
    },
  };
  return Object.create(pessoaPrototype, {
    nome: { value: nome }, //é possível atribuir as configurações
    //como enumerable:, writable, configurable
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("lu", "ot");
console.log(p1);
