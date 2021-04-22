/**
 * Promise.all
 * Promise.race
 * Promise.resolve
 * Promise.reject
 */

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

const promises = [
  "primeiro valor",
  esperaAi("promise1", 3000),
  esperaAi("promise2", 500),
  esperaAi("promise3", 1000),
  "outro valor",
];

/**
 * PROMISE.ALL resolve as promessas de uma array
 * e retorna uma array com o resultado de cada promessa
 */

// Promise.all(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/**
 * Se ocorre erro em alguma das promises, o Promise.all
 * retorna o erro e não resolve as outras
 */

/**
 * PROMISE.RACE retorna a promise que for mais rápida
 * Se a primeira que resolver não for rejeitada
 * retorna o valor dela
 * mas se a primeira que resolver for rejeitada
 * retorna o reject/erro e cai no catch
 */
// Promise.race(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Página em cache");
  } else {
    return esperaAi("Baixei a pagina", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("é um erro", e));
