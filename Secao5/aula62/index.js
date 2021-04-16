
//.pop()
//.shift()
//.unshift()
//.push()
//.length
//.slice()
const nome = "luiz, otavio, miranda";
const nomes = nome.split(' ').map(e => {return e.trim()});
//map passa cada elemento do array como um
//argumento para a função
console.log(nomes);