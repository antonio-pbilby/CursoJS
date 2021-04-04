function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome, //pode omitir nome: caso sejam iguais
        sobrenome, //como esse
        idade: idade
    };
}


const pessoa1 = {
    nome: 'asdfsd',
    sobrenome: 'mosdf',
    idade: 25,

    fala(){
        console.log('ola mundo');
    },
    fala2(){
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}

pessoa1.fala();
pessoa1.fala2();