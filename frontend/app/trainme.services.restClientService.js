/// Backend's service
angular.module('trainme').service('restClientService', ['$http', 'configService', function restClientService($http, configService){
	
		var restUrl = configService.Config.backend.restServiceUrl;
		
		this.GetExerciseDescription = function GetExerciseDescription(exercise)
		{
			return { 
						   id: exercise,
						   name: 'Squats',
						   target: 'To make 200 squats in a row',
						   description: 'One of the most time-efficient ways to burn more calories! Strong legs are crucial for staying mobile as you get older, and squats are phenomenal for increasing leg strength.', 
						   imageUrl:  'images/squats.jpg',
						   pitch: 'Only 1 exercise a day during 30 days'
						};
		};
		
		this.GetTodayExercisesForUser = function GetTodayExercisesForUser(user)
		{
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

			
			return response;
		};
	
		this.GetExerciseForUser = function GetExerciseForUser(exercise, user)
		{
			var responseSquat = { 
														exicise: 
															     { 
																			exiciseId: '1',
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
																					exiciseId: '2',
																					exiciseName: 'Bench press',
																					exiciseTarget: 'press 100 kg once',
																					todayTask: 'press 70 kg 5 times',
																					todayMotivation: ['I think it is enought for start. Do it now!','Yes, I know, it sounds terrible, but I believe you can! Do it now!'][Math.floor(Math.random()*2)],
																					todayProgress: 'week #3'
																	     }
													};
			
			
			return exercise == 'squats' ? responseSquat : responseBench;
		};
		
		this.SubscribeExercise = function SubscribeExercise(exercise, user)
		{
			return 	{
							   status: 'ok'
							};
		};
		
		this.ExercisesDone = function ExercisesDone(exercise, user)
		{
			return 	{
							   status: 'ok',
							   exiciseName: 'Squats',
							   exiciseTarget: 'To make 200 squats in a row',
							   title: 'Congratilations!',
							   motivationMessage: ['Now you should rest. Came back tomorrow and I will say you what to do', 'Winners train, losers complain! See you tomorrow'][Math.floor(Math.random()*2)],
							   todayProgress: 'day 3 from 30',
							   nextExerciseDelay: '1440'
							};
		};
		
		this.ExercisesFault = function ExercisesFault(exercise, user)
		{
			return 	{
							   status: 'ok',
							   exiciseName: 'Squats',
							   exiciseTarget: 'To make 200 squats in a row',
							   title: 'Take a rest and try tomorrow again',
							   motivationMessage: 'it is not so hard, and I believe you can',
							   todayProgress: 'day 3 from 30',
							   nextExerciseDelay: '1440'
							};
		};
		
		this.GetMenu = function GetMenu(user)
		{
			return [
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
		
		}
	
}]);