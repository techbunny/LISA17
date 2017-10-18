// This is Node's file system! https://nodejs.org/api/fs.html
var fs = require('fs');
// Express is how we handle our server routing https://expressjs.com/
var express = require('express');
var app = express();
var server = require('http').createServer(app);
// The process.env variables are passed in for azure to set automatically
var port = process.env.PORT || 3000;
// Have our server listen on the port we define above so we know when connections are made
server.listen(port);

// Telling our application to use the public folder to serve up static files.
app.use('/public/', express.static('public'));

// When a connection is made to the app, serve up index.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
console.log('Magic happens on port ' + port);