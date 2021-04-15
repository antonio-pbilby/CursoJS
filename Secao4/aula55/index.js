//IIFE
//immediately invoked function expression

//a função anônima é declarada e chamada
//evita conflito com o escopo global
const nome = 'qualquer coisa';

(function (){
  const nome = 'luiz';
  console.log(nome);
})();

console.log(nome);