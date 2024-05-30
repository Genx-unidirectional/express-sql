const express = require("express");
const instagram = require("./data.json");
const path = require("path");
const methodOverride = require("method-override");
const app = express();
const port = 3000;
app.set(methodOverride("method"));
app.set(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));
app.set("views", path.join(__dirname, "/views"));
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
// app.use("/", (req, res) => {
//   res.send("hello");
// });

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.render("user.ejs", { id });
});

// app.post("/user", (req, res) => {
//   res.send(req.body);
// });

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(q);
});

app.get("/ig/:username", (req, res) => {
  const { username } = req.params;
  const data = instagram[username];
  res.render("instagram.ejs", { data });
});
