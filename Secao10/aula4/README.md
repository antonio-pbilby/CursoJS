# Aula 4 - FileSystem

Requerimentos:

```js
const fs = require("fs").promises;
const path = require("path");
```

> OBS: FileSystem possui funções assíncronas e síncronas:

```js
fs.readdir(); //assíncrono
fs.readdirSync(); //síncrono
```

### Listar os arquivos da pasta:

```js
fs.readdir(path.resolve(__dirname))
  .then((files) => console.log(files))
  .catch((e) => console.log(e));
```
