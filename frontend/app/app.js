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


angular.module('trainme', ['ngRoute']);

angular.module('trainme').config(['$routeProvider', function($routeProvider){
	
	$routeProvider.when('/'		  , { templateUrl:'templates/exerciseView.html', controller: 'exiciseViewCtrl'})
								.when('/edit' , { templateUrl:'templates/exerciseEdit.html', controller: 'exiciseViewCtrl' })
								.when('/done'	, { templateUrl:'templates/exerciseDone.html', controller: 'exiciseDoneCtrl'})
								.when('/fault', { templateUrl:'templates/exerciseFault.html', controller: 'exiciseFaultCtrl'})
								.otherwise( { redirectTo: '/' } );
	
}]);


/// Controllers (will be moved to separate files)
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
							 
angular.module('trainme').controller('menuCtrl', ['$scope', function menuCtrl($scope){

	$scope.menu = 
		[
			{ name:'200 squats', 										 link: '/exercise/1' },
			{ name:'Abdominal exercises [REST 20h]', link: '/exercise/2'},
			{ name:'Workout...', 										 
				link: null, 
				children:	[
										{ name:'Bench press', link: '/exercise/3' },
								 		{ name:'Deadlift', 		link: '/exercise/4' },
										{ name:'Squat', 			link: '/exercise/5' }
									]
			},
			{ name:'200 squats', link: '/exercise/1'},
		];
}]);


/// Services (will be moved to separate files)
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

angular.module('trainme').service('configService', ['uidService', function configService(uidService){
	
	var config = {
									user: {
													uid: uidService.GetUid()
												},
									backend: 
													{
														restServiceUrl: ''
													}
								};
	
	this.Config = config;
	
}]);

angular.module('trainme').service('restClientService', ['$http', 'configService', function restClientService($http, configService){
	
		var restUrl = configService.Config.backend.restServiceUrl;
		
		this.GetExerciseDescription = function GetExerciseDescription(exercise)
		{
			return { 
						   id: exercise,
						   name: 'Squats',
						   target: 'To make 200 squats in a row',
						   description: 'blah-blah-blah', 
						   imageUrl:  'http://squats-description-image.svg'
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
	
}]);