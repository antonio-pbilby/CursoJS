# Aula 97 - Core-js e regenerator-runtime

## Promises e versões antigas do JS

Ao tentar usar o Babel para portar o código para uma versão anterior do JavaScript, o `log` retorna um erro:

```
Uncaught RefenreceError: regeneratorRuntime is not defined
```

Para resolver o problema, basta importar o pacote no [main.js](./src/main.js):

```
import "regenerator-runtime/runtime";
```

Para funcionar em navegadores mais antigos:

```
import "core-js/stable";
```
