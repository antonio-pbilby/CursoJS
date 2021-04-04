// let a = 'A';
// let b = 'B';
// let c = 'C';

// const numeros = [b, c, a];
// [a, b, c] = numeros;

// console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);
// ... rest operator (pegar o resto do array)
// ... spread operator

const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco);

const numeros2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
const [,[,,seis]] = numeros2;
console.log(seis);