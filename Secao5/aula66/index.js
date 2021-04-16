const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map((e) => e * 2);

//valor indice e array são passados para map
console.log(numerosDobrados);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
  { nome: "will", idade: 47 },
];
//retorna uma lista com o nome das pessoas
const pessoasNomes = pessoas.map((e) => e.nome);
console.log(pessoasNomes);

//retorna uma lista de objetos somente com atributo idade
// const idades = pessoas.map((obj) => {
//   return { idade: obj.idade };
// });
const idades = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idades);
