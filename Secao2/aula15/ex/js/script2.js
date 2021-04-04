const numero = Number(prompt('Digite seu número')); // função Number substitui a necessidade de alterar a variável com let
const numeroTitulo = document.getElementById('numero-titulo');
const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const texto4 = document.getElementById('texto4');
const texto5 = document.getElementById('texto5');
const texto6 = document.getElementById('texto6');

numeroTitulo.innerHTML = numero;
texto1.innerHTML = `<p>Raiz Quadrada ${numero ** 0.5}.<p/>`; // raiz quadrada, se é inteiro, se é NaN, arredondar pra baixo, arredondar pra cima, com duas casas decimais
texto2.innerHTML = `<p>É inteiro? ${Number.isInteger(numero)} <p/>`;
texto3.innerHTML = `<p>É NaN? ${Number.isNaN(numero)} <p/>`;
texto4.innerHTML = `<p>Arredondado pra baixo é: ${Math.floor(numero)} <p/>`;
texto5.innerHTML = `<p>Arredondado pra cima é: ${Math.ceil(numero)} <p/>`;
texto6.innerHTML = `<p>Com duas casas decimais é: ${Number.toFixed(2)} <p/>`;