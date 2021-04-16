const nomes = ['maria', 'joao', 'eduardo', 'gabriel', 'julia'];

//nomes.splice(indice, delete, elem1, elem2, elem3);

const removidos = nomes.splice(3, 2);
//remove o indice 4, uma vez

console.log(nomes, removidos);

const numeros = [1,2,3,4];

const adicionados = numeros.splice(2, 0, -1, -2, -3);
console.log(adicionados);
console.log(numeros);

//splice() somente retorna os valores removidos do array


const nomes2 = ['maria', 'joao', 'eduardo', 'gabriel', 'julia'];

const removidos2 = nomes2.splice(3,2,'luiz', 'otavio');
console.log(nomes2, removidos2);

//teste com rest operator

(function(){
  const nome = ['asdasd', 'qweqwe'];
  const outrosNomes = ['silva', 'thiago', 'jose'];
  const removidos = nome.splice(1, 1, ...outrosNomes);
  console.log(removidos, nome);
})();