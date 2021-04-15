//this

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    altura: a,
    peso: p,

    fala: function (assunto = 'falando sobre NADA.') {
      //return `${nome} está ${assunto}. peso ${peso}`;
      //peso não foi definido
      return `${nome} está ${assunto}. peso ${this.peso}`;
    },

    //getter
    get imc() {
      //com get, imc deixa de ser uma função e passa
      //a ser um atributo
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
  };
}

const p1 = criaPessoa("luiz", "otavio", 1.8, 80);
p1.nomeCompleto = 'Maria Monteiro Duartes';
console.log(p1.nomeCompleto);
