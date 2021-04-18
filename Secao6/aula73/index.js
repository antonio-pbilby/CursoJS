/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...spread
//Já vimos
Object.keys
Object.freeze(obj)
Object.defineProprty(obj, atributo, propriedades)
Object.defineProperties(obj, obj de obj de propriedades)
*/

const produto = { nome: "Caneca", preco: 1.8 };
const outraCoisa = produto;
//apontam para o mesmo endereço de memórioa
//passagem por referência
const OutraCoisaCerta = { ...produto };
//agr são dois objetos diferentes

const OutroTeste = Object.assign({}, produto, { outroAtributo: 2 });

console.log(OutroTeste);
//spread é mais bonitin

//Object.getOwnPropertyDescriptor(o, 'prop')
//retorna os valores do atributo

console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

// Object.values
// Object.entries
console.log(Object.values(produto));
console.log(Object.entries(produto));
//pode ser útil pq retorna com array

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}
