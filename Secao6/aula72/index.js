function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = 0;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    // value: estoque,
    // writable: false,
    configurable: true,
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        console.log("bad value");
        return;
      }
      estoquePrivado = valor;
    },
  });
}
//get e set também serve para proteger alguma propriedade
//this.estoque chama os métodos de get e set
//então é bom tomar cuidado para não entrar em loop

const p1 = new Produto("camiseta", 20, 3);
console.log(p1);
p1.estoque = 50;
console.log(p1.estoque);
