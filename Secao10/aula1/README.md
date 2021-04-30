# Node / Aula1

## Módulos

Além do export, podemos definir outras formas de exportas objetos, atributos e métodos:

```js
module.exports.nome = nome;
console.log(module.exports);
```

Em que module é um objeto global com suas propriedades. Experimente testar um `console.log(module);`.

Outra forma:

```js
exports.nome = nome;
exports.sobrenome = sobrenome;
console.log(exports);
```

O `this` aponta para o objeto module, portanto, também podemos fazer:

```js
this.qualquerCoisa = "qualquer coisa";
```

Para importar:

```js
const falaNome = require("./mod1").falaNome;
```
