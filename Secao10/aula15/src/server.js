require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
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

//---------------------------------
//Rotas
//---------------------------------

const route = require("./routes/routes");
const path = require("path");

const middleware = require("./middlewares/middleware");

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(middleware);

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
