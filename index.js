var morgan = require('morgan');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var http = require('http').Server(app);

var apiRouter = require('./routing/api.js');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/static/'));
app.use('/api', apiRouter);

http.listen(8000, function() {
  console.log("Listening on port 8000");
});