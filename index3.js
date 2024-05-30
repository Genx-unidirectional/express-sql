//Rest api
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");
let posts = [
  {
    id: uuidv4(),
    username: "apnacollge",
    content: "we are just started let's see where we ended up",
  },
  {
    id: uuidv4(),
    username: "Royce",
    content: "Small things makes perfection but perfection is not small thing",
  },
  {
    id: uuidv4(),
    username: "Elonmusk",
    content:
      "If something is important to get done you should keep doing it or die trying",
  },
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("home.ejs", { posts });
});

//new post

app.get("/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  res.render("edit.ejs", { post });
});

app.post("/", (req, res) => {
  const { username, content } = req.body;
  posts.push({ id: uuidv4(), username, content });
  res.redirect("/");
});

app.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { content: newContent } = req.body;
  posts = posts.map((post) => {
    if (post.id === id) {
      return { ...post, content: newContent };
    }
    return post;
  });
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter((post) => post.id !== id);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
