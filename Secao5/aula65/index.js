//filter

//retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor) {
  return valor > 10;
}
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
  { nome: 'will', idade: 47 }
];

const pessoasNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 5);
const pessoasVelhas = pessoas.filter(pessoa => pessoa.idade > 50);
console.log(pessoasNomeGrande);
console.log(pessoasVelhas);
