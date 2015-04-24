var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    request = require("request"),
    methodOverride = require("method-override");
    progressBar = require('progressbar.js');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}) );

app.get('/', function(req,res){
  res.render('index');
});

// catch-all for 404 errors
app.get('*', function(req,res){
  res.status(404);
  res.render('404');
});


app.listen(3000, function(){
  console.log("get this party started on port 3000");
});