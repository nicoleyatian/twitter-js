var express = require( 'express' );
var app = express(); // creates an instance of an express application
var swig = require('swig');
var tweetBank = require('./tweetBank');
var routes = require("./routes/");
var path = require('path');

app.use('/', routes);

app.use(function(req,res,next) {
	//console.log(req)
	console.log(req.method + ' ' + req.path + ' ' + res.statusCode);
	//console.log('----------');
	next();
})

app.use(express.static(path.join(__dirname, '/public')));
console.log(__dirname);

// app.get('/stylesheets/style.css', function(req, res, next){
// 	var options = {
// 		root: __dirname + '/public/',
// 		dotfiles: 'deny',
// 		headers: {
// 			'x.timestamp': Date.now(),
// 			'x.sent': true
// 		}
// 	};
// 	console.log(req.path);
// 	var fileName = req.params.name;
// 	console.log(fileName);
// 	res.sendFile(req.path, options, function(err){
// 		if(err) {
// 			console.log(err);
// 			res.status(err.status).end();
// 		} else {
// 			console.log('Sent:', fileName);
// 		}
// 	})
// })

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.get('/news', function (req, res) {
//   res.send('Here\'s the News!');
// });

app.listen(1337, function () {
  console.log('Example app listening on port 3000!');
});


//swig

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
//     console.log(output);
// });




app.set('view engine','html');
app.set('views', __dirname + '/views');
app.engine('html', swig.renderFile);

swig.setDefaults({cache: false});

// app.get('/news', function (req, res) {
//     var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// });




// console.log(tweetBank.list());
// console.log(tweetBank.find('Shanna Hashington'));







