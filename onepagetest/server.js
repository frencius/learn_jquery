/*var http = require("http");

http.createServer(function (request, response){
response.writeHead(200, {'Content-Type':'text/plain'});

response.end('Hello Worssld\sn');}).listen(8081);

console.log('Server running at http://127.0.0.1:8081');
*/

 // server.js
var express = require('express');
var expressLayouts = require('express-ejs-layouts');

var app = express();
var port = 8080;

var title = "Learn X";
var ejs = "EJS Render";
var datatables = "Datatables";


//ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);



// start the server
app.listen(port, function() {
  console.log('app started');
});

// route
// home
app.get('/', function(req, res) {
  res.render('pages/index', 
  		{
  			layout:'pages/master',
  			title : title,
  		}
  	);
});

// datatables
app.get('/datatables', function(req, res) {
  res.render('pages/datatables', 
		{
  			layout:'pages/master',
  			datatables : datatables
  		}
  	);
});

// ejsrender
app.get('/ejsrender', function(req, res) {
  res.render('pages/ejsrender', {
  			layout:'pages/master',
  			ejs : ejs
  		});
});