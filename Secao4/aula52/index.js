//escopo léxico
const nome = "luiz";

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'otavio';
    falaNome();
}
usaFalaNome();

//é imprimido 'luiz' pois o escopo não é relacionado
//com a ordem de chamada das funções
//mas como o nome diz, com o escopo léxico
//ou seja, o que importa é a forma como tá escrito
//logo, o próximo 'nome' que falaNome() acha é o que
//está acima da declaração da função