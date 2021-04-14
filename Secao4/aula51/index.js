//return termina a função e retorna um valor

function soma(a, b) {
  return a + b;
}

//criação de objetos
function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}
const p1 = criaPessoa("luiz", "otavio");
console.log(p1);

//vai ser complicado de entender, mas tenta
function falaFrase(frase) {
  function falaResto(resto) {
    return frase + " " + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase("Olá,")("mundo!");
console.log(olaMundo);

//ou

const olaMundo2 = falaFrase("Olá,");
console.log(olaMundo2("mundo!"));

//aplicação
function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
