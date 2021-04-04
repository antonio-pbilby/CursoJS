const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos.length);

alunos.push('teste');
console.log(alunos);

alunos.unshift('inicio');
console.log(alunos);

const removido = alunos.pop();
console.log(alunos);
console.log(removido);

const removido1 = alunos.shift();
console.log(alunos);
console.log(removido1);

delete alunos[1];
console.log(alunos);

console.log(alunos[434]);

console.log(alunos instanceof Array);