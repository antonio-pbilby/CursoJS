import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaracteres = document.querySelector(".qtd-caracteres");
const chkUpper = document.querySelector(".chk-maiusculas");
const chkLower = document.querySelector(".chk-minusculas");
const chkNums = document.querySelector(".chk-numeros");
const chkSymb = document.querySelector(".chk-simbolos");
const btnGerarSenha = document.querySelector(".gerar-senha");

export default () => {
  btnGerarSenha.addEventListener("click", (e) => {
    console.log("teste");
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    chkUpper.checked,
    chkLower.checked,
    chkNums.checked,
    chkSymb.checked
  );
  return senha || "Nada selecionado ou quantidade inválida";
}
