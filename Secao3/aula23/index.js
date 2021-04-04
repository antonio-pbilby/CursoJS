//false values
// '' "" ``
// null / undefined
// NaN
// tudo que não é um dos false values acima é 'verdadeiro'

function falaOi(){
    return 'oi';
}
//let vaiExecutar = undefined;
let vaiExecutar = 'joaozin';

console.log(vaiExecutar && falaOi());

//

console.log( 0 || false || null || 'luiz' || true);