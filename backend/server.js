const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello this is my Teamwork App");
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening at port ${port}...`));
