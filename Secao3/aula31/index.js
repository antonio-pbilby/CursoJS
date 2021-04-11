const verdadeira = true;

//let tem escopo de bloco
//var só tem escopo de função

let nome = 'Luiz';
var nome2 = 'Luiz';

if(verdadeira){
    let nome = 'Otavio';
    console.log(nome, nome2);
}
//let tem escopo de bloco {}

var soma = 0;

soma+= 1;
console.log(soma);