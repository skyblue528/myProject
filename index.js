var express = require('express');
var multer  = require('multer');
var mv = require('mv');
var cp =require('cp');
var app = express();  // assign the return variable into variable call app
var done = false;
var filePath;

app.use(multer({ dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename+Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...')
  },
  onFileUploadComplete: function (file) {
    filePath = file.path;
    console.log(file.fieldname + ' uploaded to  ' +filePath)
    done=true;
  }
}));

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/uploads'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/home');
});

app.get('/ttt', function(request, response) {
  response.render('pages/ttt');
});

app.get('/about', function(request, response) {
  response.render('pages/about');
});

app.get('/learnMore', function(request, response) {
  response.render('pages/tutorial');
});

app.get('/blog', function(request, response) {
  response.render('pages/blog');
});

app.get('/shopping', function(request, response) {
  response.render('pages/shopping');
});

app.get('/profile',function(request, response){console.log('request: ' , request);
  if(request.query.name) {
    if(request.query.player == '1') {
      filePath = 'public/images/' + request.query.name;
      cp(filePath, 'public/images/m1.png', function (err) {
        //response.sendfile('public/images/m1.png')
      });
    }else if(request.query.player == '2'){
      filePath = 'public/images/' + request.query.name;
      console.log('request.query.name2: ' ,request.query.name1);
      console.log("out player2")
      cp(filePath, 'public/images/m2.png', function (err) {
        //console.log("err: ", err)
      });
    }
  }
  response.render('pages/profile',{
    name: 'julia'
  });
});


app.post('/api/photo/player1',function(request, response){
  if(done==true){
    //console.log(request.query.files);
    console.log("filePath: ", filePath);
    mv(filePath, 'public/images/m1.png', {mkdirp: true}, function(err){
      console.log("hello world")
      //response.sendfile('public/images/m1.png')
    });
    console.log("hello world2")
    response.render('pages/profile')

  }
});

app.post('/api/photo/player2',function(request, response){
  if(done==true){
    console.log(request.files);
    console.log("filePath: ", filePath);
    mv(filePath, 'public/images/m2.png', {mkdirp: true}, function(err){
      console.log("hello world")
      //response.sendfile('public/images/m1.png')
    });
    console.log("hello world2")
    response.render('pages/profile')

  }
});

app.get('/name',function(request, response){
  var name = request.query.name;
  response.render('pages/name',{
    name: name
  });
  console.log(request.query.name);
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/backbone', function(request, response) {
  response.render('pages/backbone');
});

