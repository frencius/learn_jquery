var express = require('express');
var app = express();
var port = 8080;
app.set('view engine', 'ejs');

// start the server
app.listen(port, function() {
  console.log('app started');
});

// route our app
		app.get('/', function(req, res) {
    var aboutTitle = "About My Page";
    var aboutContent = "aa Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    res.render('pages/index', {
        aboutTitle, aboutContent

    });
   

});

		// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});