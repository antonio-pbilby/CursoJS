const express = require("express");
const route = express.Router();
const paginaInicial = require("../controller/controller");

route.get("/", paginaInicial);

module.exports = route;