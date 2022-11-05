const express = require("express");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello Word a todo");
});

app.listen(PORT, () => {
  console.log(`App escuhando en el puerto con numero${PORT}`);
});
