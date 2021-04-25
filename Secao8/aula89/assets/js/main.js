const request = (obj) => {
  return new Promise((resolve, reject) => {
    //xml http request
    const xhr = new XMLHttpRequest();
    /**
     * (method, url, async)
     * method : post, get, etc
     * url: url
     * async: true or false
     */
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) resolve(xhr.responseText);
      reject(xhr.statusText);
    });
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
  };
  try {
    const response = await request(objConfig);

    carregaResultado(response);
  } catch (e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
