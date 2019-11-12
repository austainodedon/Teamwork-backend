const bodyParser = require("body-parser");
const express = require("express");
const users = require("./routes/user.route");
const gifs = require("./routes/gif.route");
const categories = require("./routes/category.route");
const articles = require("./routes/article.route");
const app = express();

app.use(bodyParser.json());
app.use("/v1/auth", users);
app.use("/v1/gifs", gifs);
app.use("/v1/articles", articles);
app.use("/v1/categories", categories);

app.get("/", (req, res) => {
  res.send("Hello this is my Teamwork App");
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening at port ${port}...`));
