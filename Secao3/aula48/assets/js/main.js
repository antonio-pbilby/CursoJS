function tarefa() {
  let idLista = 0;
  //declaração de cada elemento do html
  const adiciona = document.querySelector(".insere");
  const lista = document.querySelector(".lista");
  const userInput = document.querySelector(".input");

  //função de inserir uma tarefa 
  function insereTarefa(textoInput) {
    const divItem = document.createElement("div");
    divItem.classList.add(`div${idLista}`);

    const itemLista = document.createElement("li");
    itemLista.innerText = textoInput;

    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("remove");
    botaoRemover.setAttribute("id", `${idLista}`);
    botaoRemover.innerText = "Remover";

    divItem.appendChild(itemLista);
    divItem.appendChild(botaoRemover);

    lista.appendChild(divItem);
    idLista++;
  }

  function removeTarefa(el) {
    const divItem = document.querySelector(`.div${el.getAttribute("id")}`);
    lista.removeChild(divItem);
    idLista--;
  }

  //event listener para esperar um click
  document.addEventListener("click", function (e) {
    e.preventDefault();
    const el = e.target;

    //caso clique no botão de inserir
    if (el === adiciona) {
      if (!userInput.value) return;
      insereTarefa(userInput.value);
    }
    
    //clicou no botão de remover
    if (el.classList.contains("remove")) {
      removeTarefa(el);
    }
  });
  
  userInput.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
      if (!userInput.value) return;
      insereTarefa(userInput.value);
    }
  })
}

tarefa();
