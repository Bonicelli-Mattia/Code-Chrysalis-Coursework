/* eslint-disable prettier/prettier */
const express = require("express");
const _ = require("lodash");

const setupExpressServer = () => {
  const app = express();

  app.use(express.json());

  app.get("/teapot", (req, res) => {
    res.status(418);
    res.end();
  });

  app.get("/hello", (req, res) => {
    res.send("world");
  });

  app.get("/hellojson", (req, res) => {
    res.send({ hello: "world" });
  });

  app.get("/greet", (req, res) => {
    const { name } = req.query;
    res.send(`Hello ${name}!`);
  });

  app.get("/:a/plus/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.send({ result: a + b });
  });

  app.post("/echo", (req, res) => {
    res.json(req.body);
  });

  app.options("/echo", (req, res) => {
    const out = _.invert(req.body);
    res.send(out);
  });

  app.get("/secret", (req, res) => {
    if (req.query.token % 2 === 0) {
      res.end();
    }
    res.status(401).end();
  });

  app.post("/secret/message", (req, res) => {
    const { token } = req.query;

    if (token % 2 === 0) {
      if (req.body.shout === "marco") {
        res.send("polo");
      } else {
        res.status(403).end();
      }
    }
    res.status(401).end();
  });

  return app;
};

module.exports = { setupExpressServer };
