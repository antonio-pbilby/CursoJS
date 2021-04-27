# Aula 94 - Import / Export

Documentação: [Import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)\/ [Export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)

Podemos exportar variáveis, funções e objetos de um script e importar no outro.

> `export { exemplo, nome, funcao };`

Podemos importar de outro script suas propriedades:

> `import { exemplo, nome funcao} from "./index.js";`

Ou importar tudo como um objeto:

> `import * as Modulos from "./index.js";`

Se dermos um `console.log(Modulos)` teremos um objeto com atributos baseado no `export {};`.

## Default

> `export default funcaoTeste(){}`

Quando o export é feito dessa forma, não precisamos destacar como objeto no `import`:

> `import padrao from "./index.js";`

> `export { nome as default, sobrenome, idade, soma };`
