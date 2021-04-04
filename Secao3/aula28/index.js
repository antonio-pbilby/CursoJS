const data = new Date();
console.log(data.toString());

const data2 = new Date(2021, 2, 20, 21, 52, 30);
console.log(data2.toString());
//ano, mês-1, dia, hora, minutos, segundos, ms


// const data3 = new Date('2021-03-15 20:20:20');
// console.log(data3.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Horas', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('dia da semana', data.getDay());


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}/ ${hora}:${min}:${seg}`;
}

const datahoje = new Date();
const dataBrasil = formataData(datahoje);
console.log(dataBrasil);