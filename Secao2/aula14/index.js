let num1 = 1.12312124;
let num2 = 2.5;

console.log(num1.toString() + num2.toString());
console.log(num1.toString(2)); //binário
console.log(num1.toFixed(2)); //arredonda para 2 casas

console.log(Number.isInteger(num1));

let temp = num1 * 'o';
console.log(Number.isNaN(temp));

//IEEE 754-2008

num1 = 0.7;
num2 = 0.1;
console.log(num1 + num2);

num1 += num2;
num1 += num2;
num1 += num2;

num1 = num1.toFixed(2);
console.log(num1);
console.log(Number.isInteger(num1));

num1 = parseFloat(num1);
console.log(Number.isInteger(num1));