//valor passado por referência

let a = [1,2,3];
let b = a;

console.log(a,b);

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b);

let c = [...a]; //faz a cópia dos valores de a


const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const be = pessoa;
be.nome = 'João';
console.log(pessoa.nome);