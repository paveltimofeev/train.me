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
	
	$routeProvider.when('/edit' , { templateUrl:'templates/exerciseEdit.html', controller: 'exiciseViewCtrl' })
								.when('/'		  , { templateUrl:'templates/exerciseView.html', controller: 'exiciseViewCtrl'})
								.when('/done'	, { templateUrl:'templates/exerciseDone.html', controller: 'exiciseDoneCtrl'})
								.when('/fault', { templateUrl:'templates/exerciseFault.html', controller: 'exiciseFaultCtrl'})
								.otherwise( { redirectTo: '/' } );
	
}]);

angular.module('trainme').controller('exiciseViewCtrl', ['$scope', function exiciseViewCtrl($scope){
	
	$scope.exiciseName 		= 'Squat';
	$scope.exiciseTarget 	= '"To do 200 squats"';
	$scope.todayTask 		= 'Today you should make 75 squats';//Lets start with 75 squats';
	$scope.todayMotivation 	= ['I think it is enought for start. Do it now!','Yes, I know, it sounds terrible, but I believe you can! Do it now!'][Math.floor(Math.random()*2)];
	$scope.todayProgress = 'day 1, left 29';
	
	$scope.Done = function Done(){
		
		$scope.todayTask = 'Congratilations!';
		$scope.todayMotivation = ['Now you should rest. Came back tomorrow and I will say you what to do', 'Winners train, losers complain! See you tomorrow'][Math.floor(Math.random()*2)];
	};
	
	$scope.Fault = function Fault(){
		$scope.todayTask = 'Take a rest and try tomorrow';
		$scope.todayMotivation 	= 'it is not so hard, I believe you can';
	};
	
	$scope.RedirectToHistory = function RedirectToHistory(){
		
	};
	
	$scope.ShareExiciseWithFriend = function ShareExiciseWithFriend(email){
		
	};
}]);

angular.module('trainme').controller('exiciseDoneCtrl', ['$scope', function exiciseDoneCtrl($scope){
	
	$scope.exiciseName 		= 'Squat';
	$scope.exiciseTarget 	= '"To do 200 squats"';
	
	$scope.todayProgress = 'day 1, left 29';
	
	$scope.todayTask = 'Congratilations!';
	$scope.todayMotivation = ['Now you should rest. Came back tomorrow and I will say you what to do', 'Winners train, losers complain! See you tomorrow'][Math.floor(Math.random()*2)];

}]);

angular.module('trainme').controller('exiciseFaultCtrl', ['$scope', function exiciseFaultCtrl($scope){
	
	$scope.exiciseName 		= 'Squat';
	$scope.exiciseTarget 	= '"To do 200 squats"';
	
	$scope.todayProgress = 'day 1, left 29';
	
	$scope.todayTask = 'Take a rest and try tomorrow';
	$scope.todayMotivation 	= 'it is not so hard, I believe you can';
		
}]);
							 
angular.module('trainme').controller('menuCtrl', ['$scope', function menuCtrl($scope){

	$scope.menu = 
		[
			{ 'name':'200 squats', 'link': '/exercise001' },
			{ 'name':'Abdominal exercises [REST 20h]', 'link': '/exercise002'},
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