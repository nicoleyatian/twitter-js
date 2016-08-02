var express = require( 'express' );
var app = express(); // creates an instance of an express application

app.use(function(req,res,next) {
	//console.log(req)
	console.log(req.method + ' ' + req.path + ' ' + res.statusCode);
	//console.log('----------');
	next();
})

// app.use(['/news'],function(req,res,next) {
// 	console.log(req.method + ' ' + req.path);
// 	console.log('----------');
// 	next();
// })


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/news', function (req, res) {
  res.send('Here\'s the News!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});