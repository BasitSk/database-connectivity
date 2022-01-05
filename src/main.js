const express = require("express");
const app = express();

const { selectUser } = require("./user");

app.get("/users", async (req, res) => {
  const list = await selectUser();
  res.json(list);
});

app.listen(4000, () => console.log("server started"));
