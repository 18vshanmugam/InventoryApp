var app = require("express");
var firebase = require("firebase");

app.use('/static', express.static('static'));
app.use('/node_modules',express.static('node_modules'));


app.get("/", function(req, res) {
    res.sendfile("./index.html");
} )

app.listen(3000);