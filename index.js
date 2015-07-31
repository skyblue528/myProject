var express = require('express');
var multer  = require('multer');
var app = express();  // assign the return variable into variable call app
var done = false;

app.use(multer({ dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename+Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...')
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path)
    done=true;
  }
}));

app.set('port', (process.env.PORT || 5000));
//console.log("process.env.PORT: " , process.env.PORT);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/uploads'));

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

app.get('/profile',function(request, response){
  //res.sendfile('pages/profile');
  response.render('pages/profile');
});

app.post('/api/photo',function(request, response){
  if(done==true){
    console.log(request.files);
    request.end(request.userPhoto.path);
  }
    //console.log(request.body);
    //response.end("" + request.body.name);
    //response.end()

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


