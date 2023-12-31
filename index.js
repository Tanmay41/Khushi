import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser"
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Successfully started server on port ${port}.`);
  });