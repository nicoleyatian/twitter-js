var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();

var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  //console.log(tweets);
  res.render( 'index', { tweets: tweets, showForm: true });
});

router.get('/users/:name', function (req, res) {
  var name = req.params.name; // --> 'nicole'
  var tweets = tweetBank.find({name: name});
  //console.log(tweets);
  res.render('index', {tweets: tweets});
});

router.get('/tweets/:id', function (req, res) {
  var id = Number(req.params.id); 
  var tweets = tweetBank.find({id: id});
  //console.log(tweets);
  res.render('index', {tweets: tweets});
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/tweets');
});


module.exports = router;