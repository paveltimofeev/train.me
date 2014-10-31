'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

/// Define a module
angular.module('trainme', ['ngRoute']);

/// Configure a module
angular.module('trainme').config(['$routeProvider', function($routeProvider){
	
	$routeProvider.when('/'		  , { templateUrl:'/today.html', controller: 'exiciseViewCtrl'})
								.when('/today' , { templateUrl:'/today.html', controller: 'exiciseViewCtrl' })
								.when('/edit' , { templateUrl:'templates/exerciseEdit.html', controller: 'exiciseViewCtrl' })
								.when('/done'	, { templateUrl:'templates/exerciseDone.html', controller: 'exiciseDoneCtrl'})
								.when('/fault', { templateUrl:'templates/exerciseFault.html', controller: 'exiciseFaultCtrl'})
								.otherwise( { redirectTo: '/' } );
	
}]);


/// Controllers (will be moved to separate files)
angular.module('trainme').controller('exiciseDescriptionCtrl', ['$scope', '$location', 'configService', 'restClientService', function exiciseDescriptionCtrl($scope, $location, configService, restClientService){
	
	var exicise = restClientService.GetExerciseDescription('squats');
	
	$scope.id							= exicise.id;
	$scope.exiciseName 		= exicise.name;
	$scope.exiciseTarget 	= exicise.target;
	$scope.description		= exicise.description;
	$scope.imageUrl				=  exicise.imageUrl;
	$scope.pitch 					= exicise.pitch;

	$scope.SubscribeExercise = function SubscribeExercise(){
		restClientService.SubscribeExercise($scope.id, configService.Config.user.uid);
		$location.redirectTo('today.html');
	};
	
}]);

angular.module('trainme').controller('exiciseViewCtrl', ['$scope', '$location', 'configService', 'restClientService', function exiciseViewCtrl($scope, $location, configService, restClientService){
	
	var response = restClientService.GetTodayExercisesForUser('squats', configService.Config.user.uid);
	var exicise = response.exicise;
	
	$scope.exiciseName 			= exicise.exiciseName;
	$scope.exiciseTarget 		= exicise.exiciseTarget;
	$scope.todayTask 				= exicise.todayTask;
	$scope.todayMotivation 	= exicise.todayMotivation;
	$scope.todayProgress 		= exicise.todayProgress;
	
	$scope.Done = function Done(){
		$location.path('/done');
	};
	
	$scope.Fault = function Fault(){
		$location.path('/fault');
	};
	
}]);

angular.module('trainme').controller('exiciseDoneCtrl', ['$scope', 'configService', 'restClientService', function exiciseDoneCtrl($scope, configService, restClientService){
	
	var response = restClientService.ExercisesDone('squat', configService.Config.user.uid);
	
	$scope.exiciseName 			 = response.exiciseName;
	$scope.exiciseTarget 		 = response.exiciseTarget;
	$scope.title 						 = response.title;
	$scope.motivationMessage = response.motivationMessage;
	$scope.todayProgress 		 = response.todayProgress;
	$scope.nextExerciseDelay = response.nextExerciseDelay;
	
}]);

angular.module('trainme').controller('exiciseFaultCtrl', ['$scope', 'configService', 'restClientService', function exiciseFaultCtrl($scope, configService, restClientService){
	
	var response = restClientService.ExercisesFault('squat', configService.Config.user.uid);
	
	$scope.exiciseName 			 = response.exiciseName;
	$scope.exiciseTarget 		 = response.exiciseTarget;
	$scope.title 						 = response.title;
	$scope.motivationMessage = response.motivationMessage;
	$scope.todayProgress 		 = response.todayProgress;
	$scope.nextExerciseDelay = response.nextExerciseDelay;
		
}]);
							 
angular.module('trainme').controller('menuCtrl', ['$scope', 'configService', 'restClientService', function menuCtrl($scope, configService, restClientService){

	$scope.menu = restClientService.GetMenu(configService.Config.user.uid);
	
}]);


/// Services (will be moved to separate files)
/// User identity service
angular.module('trainme').service('uidService', function uidService($http){

	var uid = null;
	
	function CreateUid()
	{
		uid = 'my-uid';
	}

	this.GetUid = function GetUid()
	{
		if(uid === null)
			CreateUid(); 
			
		return uid;
	};

});

/// Config's service
angular.module('trainme').service('configService', ['$http', 'uidService', function configService($http, uidService){
	
	var config = {
									user: {
													uid: uidService.GetUid()
												},
									backend: 
													{
														restServiceUrl: ''
													}
								};
								
	$http.get('config.json')
				.success(function(response){ 
						config.backend.restServiceUrl = response.data.backend.restServiceUrl; ///? check if it work or not
					});
	
	this.Config = config;
	
}]);

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
		
		this.GetTodayExercisesForUser = function GetTodayExercisesForUser(exercise, user)
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