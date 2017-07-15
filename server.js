

var express = require("express");
var path = require("path");
var app = express();

app.use('/data', express.static(path.join(__dirname,'data')));
app.use('/static', express.static(path.join(__dirname,'assets')));
app.use('/static', express.static(path.join(__dirname,'node_modules')));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
  console.log("escuchando servidor 1234")
});

app.listen(1234);