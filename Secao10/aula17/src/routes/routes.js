const express = require("express");
const route = express.Router();
const paginaInicial = require("../controller/controller");

route.get("/", paginaInicial);

route.post("/", (req, res) => {
  console.log("posted");
})
module.exports = route;