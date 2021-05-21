# Node / Aula 17 - Helmet e CSRF

## Instalação dos pacotes

`npm i helmet csurf`

## Importação dos pacotes

```js
const helmet = require("helmet");
app.use(helmet());
const csrf = require("csurf");
```

Para completar a utilização do CSRF, é necessário manualmente criar middlewares, `./src/middlewares/csrfMiddlewares.js`:
```js
function checkCsrfError (err, req, res, next) {
  console.log("csrfMiddleware");
  if(err & err.code === 'EBADCSRFTOKEN') {
    return res.json({error: 'BAD CSRF'});
  }
}

function csrfMiddleware (req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  next();
}

module.exports = { checkCsrfError, csrfMiddleware };
```

Importação e utilização dos middlewares no `server.js`:

```js
const { checkCsrfError, csrfMiddleware } = require("./middlewares/csrfmiddleware");

app.use(checkCsrfError);
app.use(csrfMiddleware);
```

A partir de então, toda requisição POST, PATCH, PUT, DELETE, requer que um csrfToken seja passado. Num formulário HTML teríamos: 
```html
<form action="/" method="post">
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
  <!-- ...><!-->
</form>
```

