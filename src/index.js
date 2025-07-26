const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require('path');

const app = express();
const port = 3000;

// cấu hình file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// morgan là middleware giúp log các request đến server // HTTP logger
app.use(morgan("combined"));

// cấu hình templates engine
app.engine("hbs", engine({extname: '.hbs'}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// định nghĩa các route
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/news", (req, res) => {
    res.render("news");
});

// start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
