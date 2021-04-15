function calculadora() {
  const userInput = document.querySelector(".input");
  const paragrafoErro = document.querySelector(".erro");

  function insereInput(texto) {
    userInput.value += texto;
  }

  function limpaTela() {
    userInput.value = "";
    mostraErro('');
  }
  
  function solucionaEquacao(equacao) {
    mostraErro('');
    try{
      const resultado = eval(equacao);
      limpaTela();
      insereInput(resultado);
    } catch (err){
      mostraErro('Por favor, revise sua equação.')
    }
  }

  function apaga(texto) {
    userInput.value = texto.slice(0, -1);
  }

  function mostraErro(erro){
    paragrafoErro.classList.add("error");
    paragrafoErro.innerText = erro;
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    //insere o número
    if (el.classList.contains("operator")) insereInput(el.innerText);

    //limpa o visor
    if (el.classList.contains("clear")) limpaTela();

    //soluciona equacao
    if (el.classList.contains("equals") && userInput.value)
      solucionaEquacao(userInput.value);

    //apaga um caractere
    if (el.classList.contains("idk")) apaga(userInput.value);
  });

  userInput.addEventListener("keypress", function (e) {
    //0123456789
    //keyCode 48 ao 57

    //+_)(*./ -
    //43 95 41 40 47 42 46 45

    if (
      !(
        (e.keyCode >= 45 && e.keyCode <= 57) ||
        (e.keyCode >= 40 && e.keyCode <= 43) ||
        e.keyCode === 95
      )
    ) {
      e.preventDefault();
    }

    if (e.keyCode === 13) solucionaEquacao(userInput.value);
  });
}

calculadora();
