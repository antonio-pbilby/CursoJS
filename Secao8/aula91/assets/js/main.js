// fetch("pessoas.json")
//   .then((resposta) => resposta.json())
//   .then((json) => loadElementsOnPage(json));

axios("pessoas.json").then((resposta) => loadElementsOnPage(resposta.data));

function loadElementsOnPage(elements) {
  const createTable = document.createElement("table");
  for (let pessoa of elements) {
    const createTableRow = document.createElement("tr");

    let createTableData = document.createElement("td");
    createTableData.innerHTML = pessoa.nome;
    createTableRow.appendChild(createTableData);

    createTableData = document.createElement("td");
    createTableData.innerHTML = pessoa.idade;
    createTableRow.appendChild(createTableData);

    createTableData = document.createElement("td");
    createTableData.innerHTML = pessoa.salario;
    createTableRow.appendChild(createTableData);

    createTable.appendChild(createTableRow);
  }

  const resultado = document.getElementById("resultado");
  resultado.appendChild(createTable);
}
