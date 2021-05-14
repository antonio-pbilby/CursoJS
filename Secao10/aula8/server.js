const { response } = require("express");
const express = require("express");
const app = express();
app.use(express.json());

// CRUD
// create, read, update, delete
//  POST,   GET,  PUT,    DELETE
// http://meusite.com/
// get http://meusite.com/

app.get("/", (request, response) => {
  response.send("Hello world");
});

app.get("/testes/:id", (req, res) => {
  return res.json(req.params);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

/**
 * req.body, req.query e req.params
 * são coisas que já vi no ignite
 */
