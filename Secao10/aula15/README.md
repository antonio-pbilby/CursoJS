# Node / Aula 14 - Express Sessions e Flash Messages

## Pacotes para a aula

`npm install express-session connect-mongo connect-flash`

```js

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const sessionOptions = session({
  //código que pode ser qualquer coisa
  secret: "asdasd",
  //criação da conexão com a sessão
  store: MongoStore.create({ mongoUrl: connectionString }),
  resave: false,
  saveUninitialized: false,
  //tempo  de duração da sessão
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, //7 dias
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());
```

A partir de então, podemos acessar o parâmetro `request.session.<var>` e adicionar um objeto, como em:
```js
const paginaInicial = (req, res) => {
  req.session.usuario = { nome: "luiz", logado: true};
  return res.render("index");
}
```

E é possível acessar esse dado por até 7 dias, como definido na `sessionOptions`.