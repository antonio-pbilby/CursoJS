function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = (this.preco * (100 - percentual)) / 100;
};

Produto.prototype.aumento = function (percentual) {
  this.preco = (this.preco * (100 + percentual)) / 100;
};

const p1 = new Produto("camisera", 50);

// p1.desconto(100);
p1.aumento(100);
console.log(p1);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 113,
  },
  tamanho2: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
});
p3.aumento(10);
console.log(p3);
