/**
 *
 */

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.random() * (max - min) + min;
}

function esperaAi2(msg, tempo) {
  setTimeout(() => {
    console.log(msg);
  }, tempo);
}

// esperaAi2("Frase 1", rand(1, 3));
// esperaAi2("Frase 2", rand(1, 3));
// esperaAi2("Frase 3", rand(1, 3));
/**
 * Apesar da ordem de execução ser 1,2,3
 * A ordem de impressão na tela é aleatória
 * Para criar uma ordem nas funções, utilizaremos
 * Promises e await
 */

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}
esperaAi("Frase1", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Frase2", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Frase3", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch();
