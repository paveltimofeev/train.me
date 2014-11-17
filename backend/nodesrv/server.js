var express = require('express');
var app = express();

/*
/api/menu
/api/exercise/id
/api/exercise/id/user/day
/api/exercise/id/subscribe
/api/exercise/done
/api/exercise/fault
*/



app.param('id', function (req, res, next, id) {
	console.log('param id='+id);
	next();
});


app.param('user', function (req, res, next, user) {
	console.log('param user='+user);
	next();
});


/// DONE: GetExerciseDescription
app.get('/api/exercise/:id', function(req, res){

	console.log('api/exercise/:id');
	
	var id = req.param('id', '0');
	
	var result = { 
				   id: id,
				   name: 'Squats',
				   target: 'To make 200 squats in a row',
				   description: 'One of the most time-efficient ways to burn more calories! Strong legs are crucial for staying mobile as you get older, and squats are phenomenal for increasing leg strength.', 
				   imageUrl:  'images/squats.jpg',
				   pitch: 'Only 1 exercise a day during 30 days'
				};
				
	res.send(result);
	
});

/// DONE: GetExerciseForUser
app.get('/api/exercise/:id/:user', function(req, res){

	console.log('api/exercise/:id/:user');
	
	var id = req.param('id', '');
	var user = req.param('user', '')
	
	var responseSquat = { 
							exicise: 
								     { 
										exiciseId: id,
										exiciseName: 'Squats',
										exiciseTarget: '"To do 200 squats"',
										todayTask: 'Now you should make 50 squats',
										todayMotivation: ['I think it is enought for start. Do it now!','Yes, I know, it sounds terrible, but I believe you can! Do it now!'][Math.floor(Math.random()*2)],
										todayProgress: 'day 3 from 30',
								     }
							};
	
	var responseBench = { 
							exicise: 
								     { 
										exiciseId: id,
										exiciseName: 'Bench press',
										exiciseTarget: 'press 100 kg once',
										todayTask: 'press 70 kg 5 times',
										todayMotivation: ['I think it is enought for start. Do it now!','Yes, I know, it sounds terrible, but I believe you can! Do it now!'][Math.floor(Math.random()*2)],
										todayProgress: 'week #3'
						     		}
							};
	
	var exercise = id == 1 ? responseSquat : responseBench;
	
	res.send(exercise);
});

/// DONE: GetTodayExercisesForUser
app.get('/api/today/:user', function(req, res){

	console.log('api/exercise/:id/:user');
	
	var response = [
						{
							
							exiciseId: '1',
							exiciseName: 'Squats',
							exiciseTarget: '"To do 200 squats"',
							todayTask: 'Now you should make 50 squats',
							todayMotivation: ['I think it is enought for start. Do it now!','Yes, I know, it sounds terrible, but I believe you can! Do it now!'][Math.floor(Math.random()*2)],
							todayProgress: 'day 3 from 30',

						},
						{ 
							
							exiciseId: '2',
							exiciseName: 'Bench press',
							exiciseTarget: 'press 100 kg once',
							todayTask: 'press 70 kg 5 times',
							todayMotivation: ['I think it is enought for start. Do it now!','Yes, I know, it sounds terrible, but I believe you can! Do it now!'][Math.floor(Math.random()*2)],
							todayProgress: 'week #3'
						}
					];
	
	
	res.send(response);
	
});

/// DONE: subscribe
app.post('/api/exercise/subscribe/:id/:user', function(req, res){
 
	console.log('/api/exercise/subscribe/:id/:user');
	
	var id = req.param('id', '0');
	var user = req.param('user', '0');
	
	var result = { status: 'ok', exercise: id, user: user };
	
	res.send(result);
	
});

/// DONE: done
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

/// DONE: fault
app.post('/api/exercise/fault', function(req, res){
 
	console.log('api/exercise/fault');
	
	var result = {
							   status: 'ok',
							   exiciseName: 'Squats',
							   exiciseTarget: 'To make 200 squats in a row',
							   title: 'Take a rest and try tomorrow again',
							   motivationMessage: 'it is not so hard, and I believe you can',
							   todayProgress: 'day 3 from 30',
							   nextExerciseDelay: '1440'
							};
	
	
	res.send(result);
	
});

/// DONE: menu
app.get('/api/menu/', function(req, res){
 
	console.log('api/menu/');
	
	var menu = [
			{ name:'What is goin on?', 		link: '/what', children: null },
			{ name:'Today tasks', 				link: '/', children: null },
			{ name:'Exicises', 										
				link: '', 
				children: 
				[
					{ name:'200 squats', 										 link: 'exiciseDescription.html', children: null },
					{ name:'Abdominal exercises [REST 20h]', link: '/exercise/2', children: null},
					{ name:'Workout...', 										 
						link: '', 
						children:	[
												{ name:'Bench press', link: '/exercise/3', children: null },
										 		{ name:'Deadlift', 		link: '/exercise/4', children: null },
												{ name:'Squat', 			link: '/exercise/5', children: null }
											]
					},
					{ name:'200 squats', link: '/exercise/1', children: null},
				]},
			{ name:'Feedback', 			 link: '/feedback', children: null }
		];
	
	
	res.send(menu);
	
});



console.log('Server running at http://localhost:3000/');

app.listen(3000);