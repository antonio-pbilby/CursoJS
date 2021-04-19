// prototipos ainda

// Produto -> aumento, desconto
// vende camiseta, caneca, lapis
// camiseta : cor
// caneca : material

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  //
  Produto.call(this, nome, preco);
  //call executa a função com o mesmo corpo,
  //mas redefine o objeto para o qual o this
  //irá apontar
}
//define o __proto__ de camiseta como sendo o __proto__
//de produto
//pois o call executa a função Produto, mas não
//declara os métodos do prototype

Camiseta.prototype = Object.create(Produto.prototype);

const camiseta = new Camiseta("Regata", 7.5, "Preta");
camiseta.aumento(10);

function Caneca(nome, preco, material) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== number) return;
      estoque = valor;
    },
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto("gen", 100);
const caneca = new Caneca("pog", 75, "borracha");
console.log(caneca);
console.log(camiseta);
console.log(produto);
