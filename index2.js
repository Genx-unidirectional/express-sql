const express = require("express");

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.get("/register", (req, res) => {
  const { name, password } = req.query;
  res.render("register.ejs", { data: { name, password } });
});

app.get("/", (req, res) => {
  res.render("simpleform.ejs");
});

app.post("/register", (req, res) => {
  const { name, password } = req.body;
  res.render("register.ejs", { data: { name, password } });
});
