/** Gerar um CPF
 * validação de CPF
 * 705.484.450-52
 * noveDig = ["705484450"]
 * soma = 10 * 7 + 9 * 0 .+ 8 * 5..
 * se 11 - (soma % 11) > 9
 * dig1 = 11 - (soma % 11) > 9 ? 0 : 11 - (soma % 11);
 */
let cpf = "705.484.450-52";
let cpfLimpo = Array.from(cpf.replace(/\D+/g, ""));

const cpfNoveDig = cpfLimpo.slice(0, -2);

let soma = cpfNoveDig.reduce((ac, valor, i) => {
  ac += Number(valor) * (cpfNoveDig.length - i + 1);
  return ac;
}, 0);
//ok tá funfando
// console.log(soma);

const dig1 = 11 - (soma % 11) > 9 ? 0 : 11 - (soma % 11);
//ok tá funfando
//console.log(dig1);

const cpfDezDig = [...cpfNoveDig, dig1];
//ok tá funfando

soma = cpfDezDig.reduce((ac, valor, i) => {
  ac += Number(valor) * (cpfDezDig.length - i + 1);
  return ac;
}, 0);
// console.log(soma);
const dig2 = 11 - (soma % 11) > 9 ? 0 : 11 - (soma % 11);
const cpfCompleto = [...cpfDezDig, dig2];
console.log(cpfCompleto);
