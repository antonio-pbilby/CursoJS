# Node / Aula 5 - Escrevendo e lendo arquivos

### Criar um arquivo:

```js
fs.writeFile(caminhoArquivo, "frase 1", {
  flat: "w",
  encoding: "utf-8",
});
```

O primeiro parâmetro é o caminho absoluto (com a extensão)
O segundo é o conteúdo do arquivo
O terceiro é um objeto com algumas configurações

### Editar um arquivo:

```js
fs.writeFile(caminhoArquivo, "frase 23", {
  flag: "a", //adiciona conteúdo ao arquivo
  encoding: "utf-8",
});
```
