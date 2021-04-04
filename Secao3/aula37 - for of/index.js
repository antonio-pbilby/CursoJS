//Seção 2.56

const nome = 'Luiz otavio';
const nomes = [
    'lena',
    'sdas',
    'mega'
]
// for (let i = 0; i < nome.length; i++){
//     console.log(nome[i]);
// }

// for(let i in nome){
//     console.log(nome[i]);
// }

for (let valor of nome){
    console.log(valor);
}

nomes.forEach(function(valor, indice) {
    console.log(valor, indice);
});

//for clássico - arrays, strings
//for in - arrays, strings, objects
//for of - arrays, strings