const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }
// console.table(novasPessoas);

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));

//a diferença é que em um array, os ids
//estavam sendo ordenados crescentemente
//no map, a ordem de inserção é mantida

//métodos:
//Map.prototype.keys() -- retorna as chaves do objeto
//Map.prototype.values() -- retorna os valores relacionados às chaves
//Map.prototype.delete(i) -- elimina a i-ésima chave
