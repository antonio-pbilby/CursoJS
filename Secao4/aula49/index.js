//Declaração de funções /Function hoisting
//ou seja, a função pode ser chamada antes de ser delarada
function falaOi(){
    console.log('Oie');
}

//first-class objects
//objetos de primeira classe
//ou seja, pode ser tratada como função ou dado
//function expression
const souUmDado = function(){
    console.log('Sou um dado');
};

//funcao que recebe funcao
function executaFuncao (funcao){
    funcao();
}

executaFuncao(souUmDado);

//arrow functions
const arrowFunction = () => {
    console.log('sou uma arrow function');
};

//dentro de um objeto
const obj = {
    falar: function() {
        console.log('estou falando');
    }
}; 

const obj2 = {
    falar() {
        console.log('estou falando2');
    }
};
obj.falar();
obj2.falar();