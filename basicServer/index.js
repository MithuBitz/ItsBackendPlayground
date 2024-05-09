require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dev", (req, res) => {
  res.send("The Dev name is Mithu Bortamuly");
});

app.get("/fb", (req, res) => {
  res.send("<h1>Facebook account name : Mithu Bortamuly</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
