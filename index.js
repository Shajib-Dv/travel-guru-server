/** @format */

const express = require("express");
const data = require("./data/data.json");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Re-travel Server is running");
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.get("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const singleData = data.find((d) => d.id === id) || {};
  res.send(singleData);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
