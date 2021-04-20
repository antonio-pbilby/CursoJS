//composição de objetos
//mixing
const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  },
};

//const pessoaPrototype = { ...falar, ...comer, ...beber };
//ou
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome }, //é possível atribuir as configurações
    //como enumerable:, writable, configurable
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("lu", "ot");
