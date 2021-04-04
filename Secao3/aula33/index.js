const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

// console.log(pessoa.nome);

const { nome = '', sobrenome, baba = '' } = pessoa;
console.log(nome, sobrenome, baba);

const { endereco: {rua, numero}} = pessoa;
console.log(rua, numero);

const n = [1,2,3,4];
console.log(n);
console.log(...n);