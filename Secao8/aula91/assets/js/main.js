// const request = (obj) => {
//   return new Promise((resolve, reject) => {
//     //xml http request
//     const xhr = new XMLHttpRequest();
//     /**
//      * (method, url, async)
//      * method : post, get, etc
//      * url: url
//      * async: true or false
//      */
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener("load", () => {
//       if (xhr.status >= 200 && xhr.status < 300) resolve(xhr.responseText);
//       reject(xhr.statusText);
//     });
//   });
// };

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);

    if (response.status !== 200) throw new Error("ERRO 404");

    const html = await response.text();

    carregaResultado(html);
  } catch (e) {
    console.warn(e);
  }

  //ambos códigos executam da mesma forma
  //mas com linguagem diferente
  // fetch(href)
  //   .then((response) => {
  //     if (response.status !== 200) throw new Error("ERRO 404");
  //     return response.text();
  //   })
  //   .then((html) => carregaResultado(html))
  //   .catch((e) => console.log(e));
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}

//carregar o conteúdo da página1
//fetch retorna uma promise
// fetch("./pagina3.html")
//   .then((resposta) => {
//     if (resposta.status !== 200) throw new Error("ERROR 4004 NOSSO");
//     return resposta.text();
//   })
//   .then((html) => console.log(html))
//   .catch((e) => console.log(e));
