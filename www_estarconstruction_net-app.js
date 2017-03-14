//config
var port = 8000;
var hostname = "localhost";

var htmlRootPath = __dirname + '/app/webdata';
var assetsPath = htmlRootPath + '/assets';
var imagesPath = htmlRootPath + '/images';
var indexHtmlPath = htmlRootPath + '/index.html';
var landingHtmlPath = htmlRootPath + '/landing.html';
var notFoundHtmlPath = htmlRootPath + '/404.html';

var templatesPath = __dirname + '/app/templates/';
var sourcePath = __dirname + '/app/src/';
var contentPath = templatesPath + 'content/';
var includesPath = templatesPath + 'includes/';

var express = require('express');
var app = express();
var router = express.Router();


//TODO: this needs moved to it's own controller... but i've not got it working yet...
app.use('/assets', express.static(assetsPath));
app.use('/images', express.static(imagesPath));

app.get('/', function(req, res){
	res.sendFile(indexHtmlPath);
});

app.get('/spec_home', function(req, res){
	res.sendFile(landingHtmlPath);
});

app.get('/custom_home', function(req, res){
	res.sendFile(landingHtmlPath);
});

app.get('/renovations', function(req, res){
	res.sendFile(landingHtmlPath);
});

app.get('/framing', function(req, res){
	res.sendFile(landingHtmlPath);
});

app.get('/concrete', function(req, res){
	res.sendFile(landingHtmlPath);
});

app.get('/new_home_circleville', function(req, res){
	res.sendFile(landingHtmlPath);
});

app.get('/man_cave', function(req, res){
	res.sendFile(landingHtmlPath);
});

app.get('/flatwork', function(req, res){
	res.sendFile(landingHtmlPath);
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.status(404).sendFile(notFoundHtmlPath);
});

app.listen(port, hostname);
console.log('Server up and running at http://' + hostname + ':' + port);
