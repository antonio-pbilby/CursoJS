function retornaFuncao (nome){
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao('luiz');
const funcao2 = retornaFuncao('joao');

console.log(funcao);
console.log(funcaO2);
