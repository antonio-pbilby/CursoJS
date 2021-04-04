let umaString = 'Um "texto"';

console.log('imprimindo a string:'+ umaString);
console.log('string[4]: '+ umaString[4]);

console.log(umaString.concat(' em um ')); //concatenação de strings

console.log('index do "texto": '+ umaString.indexOf('texto', 3)); //segundo argumento é onde começa a procurar

//match()
//search()

console.log('replace "Um" por "outra": '+ umaString.replace('Um','outra')); //troca só a primeira vez que encontra

let a = umaString.length;
console.log('len da string: '+ a);
console.log('slice da string: '+ umaString.slice(0,3));

console.log(umaString.split(' ',1));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());