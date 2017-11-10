var express = require("express");
var firebase = require("firebase");

var path = require("path");
app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'node_modules')));


app.get("/", function(req, res) {
    res.sendfile("static/index.html");
} )

app.get("/main", function(req, res) {
    res.sendfile("static/main.html");
} )

console.log(process.env.IP);

app.listen(process.env.PORT, process.env.IP);