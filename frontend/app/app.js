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


angular.module('trainme', []);
angular.module('trainme').controller('exiciseViewCtrl', ['$scope', function exiciseViewCtrl($scope){
	
	$scope.exiciseName 		= 'Squat';
	$scope.exiciseTarget 	= '"To do 200 squats"';
	$scope.todayTask 		= 'Lets Do 30 squats';
	$scope.todayMotivation 	= 'I think it is enought for start';
	$scope.todayProgresstodayProgress = 'day 1, left 29';
	
	$scope.Done = function Done(){
		
	};
	
	$scope.Fault = function Fault(){
		
	};
	
	$scope.RedirectToHistory = function RedirectToHistory(){
		
	};
	
	$scope.ShareExiciseWithFriend = function ShareExiciseWithFriend(email){
		
	};
}]);
														 
angular.module('trainme').controller('menuCtrl', ['$scope', function menuCtrl($scope){

	$scope.menu = 
		[
			{ 'name':'200 squats', 'link': '/exercise001' },
			{ 'name':'Abdominal exercises', 'link': '/exercise002'},
			{ 'name':'Workout...', 'link': null, 'children':
				[
					{ 'name':'Bench press', 'link': '/exercise003' },
			 		{ 'name':'Deadlift', 	'link': '/exercise004' },
					{ 'name':'Squat', 		'link': '/exercise005' }
				]
			},
			{ 'name':'200 squats', 'link': '/exercise001'},
		
		];
	
}]);