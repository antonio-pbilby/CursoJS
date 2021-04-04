const num = Number(prompt('digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = num;
const texto1 = document.getElementById('texto1');
texto1.innerHTML = `<p>Raiz quadrada: ${num ** 0.5}.`;


texto1.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}.</p>`;


texto1.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;


texto1.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`;


texto1.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`;


texto1.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;