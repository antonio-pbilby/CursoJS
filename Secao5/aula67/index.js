//reduce consegue fazer o mesmo que filter e map
//reduzir um array a um único elemento
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0);
//0 é o valor inicial do acumulador

const pares = numeros.reduce(function (acumulador, valor, indice, array) {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);

console.log(pares);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 64 },
  { nome: "Wallace", idade: 47 },
  { nome: "will", idade: 47 },
];

//retorna a pessoa mais velha
const pessoaVelha = pessoas.reduce(function (acumulador, valor) {
  return acumulador.idade > valor.idade ? acumulador : valor;
  // if (acumulador.idade > valor.idade) return acumulador;
  // return valor;
});

console.log(pessoaVelha);
