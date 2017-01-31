/*// server.js
// import the http module
var http = require('http');

// handle sending requests and returning responses
function handleRequests(req, res) {
  // return string
  res.end('Hello world!');
}

// create the server
var server = http.createServer(handleRequests);

// start server and listen on port x
server.listen(8080, function() {
  console.log('Listening on port 8080');
});*/

 // server.js
var express = require('express');
var app = express();
var port = 8080;
app.set('view engine', 'ejs');

// start the server
app.listen(port, function() {
  console.log('app started');
});

// route our app
/*app.get('/', function(req, res) {
  res.send('hello world! A kjashdsadsdas asdsa a sdasds');
*/
		app.get('/', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

		// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

