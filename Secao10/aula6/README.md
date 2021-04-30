# Node / Aula 6 - Express

## Instalação do pacote

`npm install express`

### Importação do pacote

```js
const express = require("express");
```

### Inicialização do express

```js
const app = express();
```

## Inicialização de uma porta

```js
app.get("/", (require, response) => {
  response.send("Hello world");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```
