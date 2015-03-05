var express = require('express');
var app = express();

var port = Number(process.env.PORT) || 3000;

app.use(express.static("public"));

app.get("/portfolio/sport-trail", function (req, res) {
  res.sendFile(__dirname + "/public/portfolio/sport-trail/index.html");
});

app.listen(port, function () {
  console.log("Server start on port " + port);
});