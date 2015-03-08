var express = require('express');
var app = express();
var path = require('path');
var nunjucks = require('nunjucks');

var nun = new nunjucks.Environment(new nunjucks.FileSystemLoader('views'));
nun.express(app);


var port = Number(process.env.PORT) || 3000;


app.use(express.static("public"));

app.get('/', function (req, res) {
  res.render('pages/index.html', {
    name: process.env.NAME
  });
});

app.get("/portfolio/mumbo", function (req, res) {
  res.sendFile(__dirname + "/public/portfolio/mumbo/index.html");
});

app.get("/portfolio/sport-trail", function (req, res) {
  res.sendFile(__dirname + "/public/portfolio/sport-trail/index.html");
});

app.listen(port, function () {
  console.log("Server start on port " + port);
});