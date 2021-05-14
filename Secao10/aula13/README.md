# Node / Aula 13 - Middlewares

## Middlewares

Um middleware é uma função no seguinte padrão:
```js
function middleware (req, res, next){
  //what to do
  return next();
}
```

Podemos especificar para o nosso `server.ts` utilizar esse middleware em todas as rotas:

```
app.use(middleware);
```

Ou podemos separar esse middleware em uma pasta de middlewares `./src/middlewares/middleware.js`:
```js
module.exports = (req, res, next) => {
  console.log("passou no middleware");
  next();
};
```

e importar no `server.js`:
```js
const middleware = require("./middlewares/middleware");
app.use(middleware);
```