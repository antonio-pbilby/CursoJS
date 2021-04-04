// Seção 2.55
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'a',
    idade: 1,
    sobrenome: 'b'
}

for (let key in pessoa){
    console.log(key, pessoa[key]);
}