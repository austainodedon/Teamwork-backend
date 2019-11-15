const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const users = require("./routes/user.route");
const gifs = require("./routes/gif.route");
const articles = require("./routes/article.route");
const categories = require("./routes/category.route");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use("/api", users);
app.use("/api", gifs);
app.use("/api", articles);
app.use("/api", categories);

app.get("/", (req, res) => {
  res.send("Hello this is my Teamwork App");
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening at port ${port}...`));
