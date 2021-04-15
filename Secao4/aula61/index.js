//funções geradoras

function* geradora1(){
  yield 'valor 1';
  yield 'valor 2';
  yield 'valor 3';
}

const g1 = geradora1();
console.log(g1); //retorna um object [generator]
//primeira execução
console.log(g1.next()); //retorna um objeto com os yields do gerador
//segunda execução
console.log(g1.next().value) //retorna o valor do yield
//terceira execução
console.log(g1.next().value) //retorna o valor do yield

function* geradora2() {
  let i = 0;

  while(true){
    yield i;
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


//outro exemplo
function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for(let valor of g4){
  console.log(valor);
}

//outro exemplo

function* geradora5(){
  yield function(){
    console.log('vim do y1');
  }

  yield function() {
    console.log('vim do y2');
  }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();

//o return ainda finaliza a função

function* teste(){
  let i = 0;

  while(true){
    yield i;
    console.log(`i ${i}`);
    i++;
  }
}
const fun = teste();
console.log(fun.next().value);
//interessante, a função para no yield e só continua
//no próximo next