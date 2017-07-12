var express = require('express');

var app = express();

app.use('/data', express.static(__dirname + '/data'));
app.use('/static', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
	console.log("escuchando servidor en puerto 8000");
});

app.listen(8000);