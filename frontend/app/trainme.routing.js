/// Configure a module
angular.module('trainme').config(['$routeProvider', function($routeProvider){
	
	$routeProvider
					.when('/', 					{ templateUrl:'templates/testMock.html', 					controller: 'exiciseViewCtrl'})
					.when('/today',				{ templateUrl:'templates/today.html', 			controller: 'todayCtrl'})
					.when('/excercise/:id',		{ templateUrl:'templates/exerciseView.html', 	controller: 'exiciseViewCtrl'})
					.when('/edit', 				{ templateUrl:'templates/exerciseEdit.html', 	controller: 'exiciseViewCtrl'})
					.when('/done', 				{ templateUrl:'templates/exerciseDone.html', 	controller: 'exiciseDoneCtrl'})
					.when('/fault', 			{ templateUrl:'templates/exerciseFault.html', 	controller: 'exiciseFaultCtrl'})
					.otherwise( { redirectTo: '/' } );
}]);