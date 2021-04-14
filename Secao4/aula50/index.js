function funcao() {
  console.log(arguments[0]);
}
funcao("valor", 2, 3, 4);

//quando se define com function
//é possível usar a variavel arguments
//mesmo que a função receba nenhum parâmetro, se algum
//argumento for passado, ele é armazenado em arguments

function somaTudo() {
  let total = 0;
  for (let i of arguments) {
    total += i;
  }
  console.log(total);
}
somaTudo(1, 2, 3, 5, 6, 3, 2, 2, 1, 1);
//
function paramEArg(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  for (let i of arguments) {
    console.log(i);
  }
}

paramEArg(1, 2, 3, 4, 5, 6);

//
function ab(a = 0, b = 0) {
  console.log(a + b);
}
ab(2); //menos argumentos que parametros

//desestruturação
function desest({ nome, sobrenome, idade }) {
  //o parametro deve ter o mesmo nome das chaves do argumento
  console.log(nome, sobrenome, idade);
}
desest({nome:'luiz',sobrenome:'sas',idade:'30'});

//desestruturação arrays
function arrayss ([a,b,c]){
  console.log(a,b,c);
}
arrayss([1,2,3]);


//rest operator
function conta (operador, acumulador, ...numeros){
  console.log(operador,acumulador,numeros);
  for(let numero of numeros){
    console.log(numero);
  }
}
conta('+',0,20,2,3,5,2,1);

//se não souber quantos argumentos serão passados pra função
//use o rest operator ...var
//funciona para qualquer função