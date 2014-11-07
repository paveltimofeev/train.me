var express = require('express');
var app = express();

/*
api/exercise/id
api/exercise/id/user/day
api/exercise/id/subscribe
api/exercise/done
api/exercise/fault
*/



app.param('id', function (req, res, next, id) {
	console.log('param id='+id);
	next();
});


app.param('user', function (req, res, next, user) {
	console.log('param user='+user);
	next();
});


app.get('api/exercise/:id', function(req, res){

	
	console.log('api/exercise/:id');
	res.send('hello world');
	
});


app.get('api/exercise/:id/:user', function(req, res){

	console.log('api/exercise/:id/:user');
	res.send('hello world');
	
});

app.post('api/exercise/:id/subscribe', function(req, res){
 
	console.log('api/exercise/:id/subscribe');
	res.send('hello world');
	
});

app.post('api/exercise/done', function(req, res){
 
	console.log('api/exercise/done');
	res.send('hello world');
	
});

app.post('api/exercise/fault', function(req, res){
 
	console.log('api/exercise/fault');
	res.send('hello world');
	
});









console.log('Server running at http://localhost:3000/');

app.listen(3000);