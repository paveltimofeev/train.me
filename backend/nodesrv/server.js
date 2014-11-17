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
 
	 
	var result =	{
		   status: 'ok',
		   exiciseName: 'Squats',
		   exiciseTarget: 'To make 200 squats in a row',
		   title: 'Congratilations!',
		   motivationMessage: ['Now you should rest. Came back tomorrow and I will say you what to do', 'Winners train, losers complain! See you tomorrow'][Math.floor(Math.random()*2)],
		   todayProgress: 'day 3 from 30',
		   nextExerciseDelay: '1440'
		};
 
	console.log('api/exercise/done');
	
	console.log(result);
	res.send(result);
	
});

app.post('/api/exercise/fault', function(req, res){
 
	console.log('api/exercise/fault');
	res.send('fault');
	
});


console.log('Server running at http://localhost:3000/');

app.listen(3000);