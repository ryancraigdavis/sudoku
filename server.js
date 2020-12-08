var express = require('express');
var http = require('http'); // Because we aren't using a template engine - to serve static html files
var app = express();
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})


app.get('/', function(req, res){
  var path = 'index.html';
  res.sendFile(path, {root: './public'})
})

console.log('Express started on port 1348; press Ctrl-C to terminate.');
http.createServer(app).listen(1348);
