/*var http = require("http");

http.createServer(function (request, response){
response.writeHead(200, {'Content-Type':'text/plain'});

response.end('Hello Worssld\sn');}).listen(8081);

console.log('Server running at http://127.0.0.1:8081');
*/

 // server.js
var express = require('express');
<<<<<<< HEAD
var expressLayouts = require('express-ejs-layouts');

var app = express();
var port = 8080;

=======
var app = express();
var port = 8080;
>>>>>>> 20ba505b4a5d893eb80be2e6b0e7ffd2c082f779
var title = "Learn X";
var ejs = "EJS Render";
var datatables = "Datatables";


//ejs
app.set('view engine', 'ejs');
<<<<<<< HEAD
app.use(expressLayouts);

=======
>>>>>>> 20ba505b4a5d893eb80be2e6b0e7ffd2c082f779


// start the server
app.listen(port, function() {
  console.log('app started');
});

// route
// home
app.get('/', function(req, res) {
<<<<<<< HEAD
  res.render('pages/index', 
  		{
  			layout:'pages/master',
  			title : title,
  		}
  	);
=======
  res.render('pages/index', {title});
>>>>>>> 20ba505b4a5d893eb80be2e6b0e7ffd2c082f779
});

// datatables
app.get('/datatables', function(req, res) {
<<<<<<< HEAD
  res.render('pages/datatables', 
		{
  			layout:'pages/master',
  			datatables : datatables
  		}
  	);
=======
  res.render('pages/datatables', {datatables});
>>>>>>> 20ba505b4a5d893eb80be2e6b0e7ffd2c082f779
});

// ejsrender
app.get('/ejsrender', function(req, res) {
<<<<<<< HEAD
  res.render('pages/ejsrender', {
  			layout:'pages/master',
  			ejs : ejs
  		});
=======
  res.render('pages/ejsrender', {ejs});
>>>>>>> 20ba505b4a5d893eb80be2e6b0e7ffd2c082f779
});