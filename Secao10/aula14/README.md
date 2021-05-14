# Node / Aula 14 - MongoDB

## Dotenv

`npm install dotenv` - para salvar em incognito

Criar um arquivo `.env`:
```
CONNECTIONSTRING = mongodb+srv://<user>:<password>@cursojs1.v1wqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

```js
require("dotenv").config();

mongoose.connect(process.env.CONNECTIONSTRING,//...}
```


## Mongoose

`npm install mongoose` - mongodb

```js
const mongoose = require("mongoose");
//código de conexão fornecido pelo mongodb

//const connectionString = "mongodb+srv://<user>:<password>@cursojs1.v1wqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/**
 * Trataremos o retorno da promise para somente abrir
 * as portas do servidor quando a conexão com a base de dados
 * for concluída
 */
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Connected to MongoDB");
    app.emit("pronto")
  })
  .catch(e => console.log(e));

//...
app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000!");
  });
});
```

## Criação de dados no banco

Criação do modelo/entidade `HomeModel.js`:
```js
const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: String
});

const HomeModel = mongoose.model("Home", HomeSchema);

module.exports = HomeModel;
```

Criação de dados a partir do modelo:
```js
const HomeModel = require("../models/HomeModel");

HomeModel.create({
  titulo: "um titulo de testes",
  descricao: "uma descricao de testes"
})
  .then((dados) => {
    console.log(dados);
  })
  .catch((e)=> console.log(e));
```