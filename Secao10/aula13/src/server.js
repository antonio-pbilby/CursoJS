const express = require("express");
const app = express();
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
// http://meusite.com/
// get http://meusite.com/

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

/**
 * req.body, req.query e req.params
 * são coisas que já vi no ignite
 */
