const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
	res.render("index", {title: "Hello World"});
})

app.listen(port, () => {
	console.log(`Listening on 
	port ${port}`);
});