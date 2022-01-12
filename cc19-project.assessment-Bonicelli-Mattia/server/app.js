const express = require("express");
const path = require("path");
const db = require("./knex");

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

app.all("/api", (req, res) => {
  
  const queryKey = Object.keys(req.query);
  const queryValue = req.query[queryKey];

  function redirect(queryKey, queryValue) {
    console.log(queryKey);
    switch (queryKey) {
      case "getNotes":
        console.log("Routing to 'All notes'...");
        getAllNotes(queryValue);
        break;
      case "getNote":
        console.log("Routing to 'Single note'...");
        getSingleNote(queryValue);
        break;
      case "createNote":
        console.log("Routing to 'Note creation'...");
        createNote(queryValue);
        break;
      case "patchNote":
        console.log("Routing to 'Note patching'...");
        patchNote(queryValue);
        break;
      case "deleteNote":
        console.log("Routing to 'Note deletion'...");
        deleteNote(queryValue);
        break;        
      default:
        console.log("Switch failed");
        res.status(400).end();
        break;
    }
  }

  redirect(queryKey.toString(), queryValue);

  async function getAllNotes() {
    try {
      const match = await db("notes");
      res.status(200);
      res.send(match);
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }

  async function getSingleNote(queryValue) {
    try {
      const match = await db("notes").where("id", queryValue);
      res.status(200);
      res.send(match);
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }

  async function createNote(queryValue) {
    try {
      const allMatches = await db("notes").where("id", queryValue);
      res.status(200);
      res.send(allMatches);
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }

  async function patchNote(queryValue) {
    try {
      const allMatches = await db("notes").where("id", queryValue);
      res.status(200);
      res.send(allMatches);
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }
  
  async function deleteNote(queryValue) {
    try {
      const allMatches = await db("notes").where("id", queryValue);
      res.status(200);
      res.send(allMatches);
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }
});

module.exports = app;
