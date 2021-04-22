/**
 * Async e Await
 */

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("cai no erro");
        return;
      }

      resolve(msg.toUpperCase() + " wow");
      return;
    }, tempo);
  });
}
//super verboso, ainda assim
//tão ruim quanto um callback hell
/*
esperaAi("fase 1", rand(0, 3))
  .then((valor) => {
    console.log(valor);
    return esperaAi("fase 2", rand(0, 3));
  })
  .then((fase) => {
    console.log(fase);
    return esperaAi("fase", rand(0, 3));
  })
  .then((fase) => {
    console.log(fase);
  })
  .catch((e) => console.log(e));
*/

async function executa() {
  try {
    const fase1 = await esperaAi("fase1", rand(0, 3));
    console.log(fase1);
    const fase2 = await esperaAi("fase2", rand(0, 3));
    console.log(fase2);
    const fase3 = await esperaAi("fase3", rand(0, 3));
    console.log(fase3);
    console.log("cabou");
  } catch (e) {
    console.log(e);
  }
}

executa();

/**
 * Promise pendente - ainda em execução
 * resolved
 * rejected
 */
