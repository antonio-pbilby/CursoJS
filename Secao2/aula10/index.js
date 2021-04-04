//Seção 2 - 16. Operadores aritméticos...
//operadores aritméticos, de atribuição e de incremento

/**
 * Aritméticos
 * +, -, *, % e ** /
 * 
 */

//ordem dos operadores:
// () > ** > *, /, % > +,-
// da esquerda para direita para os de mesma importância

//incremento
let contador = 1;
contador++; //contador = contador + 1, contador é igual a 2
// ++contador dá quase no mesmo

contador = 1;
console.log(contador++); //printa contador e depois incrementa
contador = 1;
console.log(++contador); //incrementa e depois printa o valor incrementado
//--contador, contador-- equivalente

const passo = 2;
contador = 1;
contador += passo; //funciona para qualquer operador aritmético
console.log(contador);

//NaN = Not a Number, ocorre caso use operadores aritméticos com tipos
// de dados incompatíveis, tais como *, /, %, ** entre Number e String (com texto).

//conversão de tipo de dado
const texto = '154';
const numero = parseInt(texto);
console.log(numero);
console.log(typeof(numero));

//apesar de JS não diferenciar int de float, existe parseInt e parseFloat
//sendo que parseInt remove casas decimais
//também é possível usar Number(variavel);