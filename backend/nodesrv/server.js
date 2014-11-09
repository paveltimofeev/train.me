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


app.get('/api/exercise/:id', function(req, res){

	
	console.log('api/exercise/:id');
	res.send('exercise ' + req.param('id', '0'));
	
});


app.get('/api/exercise/:id/:user', function(req, res){

	console.log('api/exercise/:id/:user');
	res.send( + req.param('id', '') + ' exercise, user ' + req.param('user', ''));
	
});

app.post('/api/exercise/:id/subscribe', function(req, res){
 
	console.log('api/exercise/:id/subscribe');
	res.send('subscribe ' + req.param('id', '0'));
	
});

app.post('/api/exercise/done', function(req, res){
 
	console.log('api/exercise/done');
	res.send('done');
	
});

app.post('/api/exercise/fault', function(req, res){
 
	console.log('api/exercise/fault');
	res.send('fault');
	
});


console.log('Server running at http://localhost:3000/');

app.listen(3000);