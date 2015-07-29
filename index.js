var express = require('express');
var app = express();  // assign the return variable into variable call app

app.set('port', (process.env.PORT || 5000));
//console.log("process.env.PORT: " , process.env.PORT);

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/home');
});

app.get('/index', function(request, response) {
  response.render('pages/index');
});

app.get('/about', function(request, response) {
  response.render('pages/about');
});

app.get('/learnMore', function(request, response) {
  response.render('pages/tutorial');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


