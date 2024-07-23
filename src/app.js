"use strinct";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

//Carrega as Routez
const indexRoutes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const create = router.post("/", (req, res, next) => {
  res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(201).send({
    id: id,
    item: req.body
  });
});

const del = router.delete("/", (req, res, next) => {
  res.status(200).send(req.body);
});

app.use("/", indexRoutes);
app.use("/products", create);
app.use("/products", put);
app.use("/products", del);

module.exports = app;