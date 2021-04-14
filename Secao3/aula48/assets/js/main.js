function tarefa() {
  //declaração de cada elemento do html
  const adiciona = document.querySelector(".insere");
  const lista = document.querySelector(".lista");
  const userInput = document.querySelector(".input");

  function restauraTarefas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for(let tarefa of listaDeTarefas){
      insereTarefa(tarefa);
    }
  }
  restauraTarefas();

  function salvaTarefas(){
    //seleciona todos os <li>
    const liTarefas = lista.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas){
      listaDeTarefas.push(tarefa.innerText);
    }
    
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
  }

  function limpaTarefa(){
    //limpa a área de input
    userInput.value = '';
    userInput.focus();
  }
  
  function criaBotaoRemove(){
    //cria o botão de remover tarefa
    const botao = document.createElement("button");
    botao.classList.add("remove");
    botao.innerText = "Remover";
    return botao;
  }

  function insereTarefa(textoInput) {
    //função de inserir uma tarefa 
    const divItem = document.createElement("div");
    divItem.classList.add(`div`);

    const itemLista = document.createElement("li");
    itemLista.innerText = textoInput;

    const botaoRemover = criaBotaoRemove();

    divItem.appendChild(itemLista);
    divItem.appendChild(botaoRemover);

    lista.appendChild(divItem);
    limpaTarefa();
    salvaTarefas();
  }
  
  function removeTarefa(el) {
    el.parentElement.remove();
    salvaTarefas();
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
  });
}

tarefa();
