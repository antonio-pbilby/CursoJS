const express = require("express");
const app = express();

// CRUD
// create, read, update, delete
//  POST,   GET,  PUT,    DELETE
// http://meusite.com/
// get http://meusite.com/

app.get("/", (request, response) => {
  response.send("Hello world");
});

app.get("/contato", (request, response) => {
  response.send("Obrigado por entrar em contato");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
