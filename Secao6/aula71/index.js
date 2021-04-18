// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, //aparece no log do objeto
    //ou é considerada em for in
    value: estoque, //valor do atributo
    writable: false, //se pode ser alterado após criação
    configurable: false, //se pode ou não reconfigurar essas mesmas
    //propriedades do atributo
    // writable -> se pode alterar o valor do atributo
    // configurabel -> se pode alterar as propriedades do atributo
    // assim como deletar o atributo
  });
  // Object.defineProperty(this, "estoque", {
  // (objeto, atributo, objeto de propriedades)

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true,
    },
  });
}

const p1 = new Produto("Camiseta", 20, 30);
console.log(p1);
console.log(Object.keys(p1));
//retorna uma lista com as chaves

for (let chave in p1) {
  console.log(chave);
}
