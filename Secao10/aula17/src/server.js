//---------------------------------
//Todas as importações
//---------------------------------
require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const route = require("./routes/routes");
const path = require("path");
const middleware = require("./middlewares/middleware");
const { checkCsrfError, csrfMiddleware } = require("./middlewares/csrfMiddleware");

const helmet = require("helmet");
const csrf = require("csurf");
app.use(helmet());
// const connectionString = "mongodb+srv://<user>:<senha>@cursojs1.v1wqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//---------------------------------
//Conexão com mongo DB
//---------------------------------
const connectionString = process.env.CONNECTIONSTRING;

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Connected to MongoDB");
    app.emit("DatabaseReady")
  })
  .catch(e => console.log(e));

//---------------------------------
//Criação de seções (cookies?)
//---------------------------------
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

//---------------------------------
//Rotas
//---------------------------------
//middleware para interpretar json
app.use(express.json());

//pasta de arquivos estáticos
app.use(express.static(path.resolve(__dirname, "..", "public")));

//views - ferramenta do express para carregar frontend
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//CSRF - Cross-Site Request Forgery
app.use(csrf());

app.use(middleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(route);
// CRUD
// create, read, update, delete
//  POST,   GET,  PUT,    DELETE

app.on("DatabaseReady", () => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000!");
  });
});

/**
 * req.body, req.query e req.params
 * são coisas que já vi no ignite
 */
