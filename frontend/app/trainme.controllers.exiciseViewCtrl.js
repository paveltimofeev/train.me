angular.module('trainme').controller('exiciseViewCtrl', 
		[
			'$scope', 
			'$location', 
			'configService', 
			'restClientService', 
	
function exiciseViewCtrl($scope, $location, configService, restClientService){
	
	var response = restClientService.GetTodayExercisesForUser('squats', configService.Config.user.uid,function(exicise){
	
	
		$scope.exiciseName 		= exicise.exiciseName;
		$scope.exiciseTarget 	= exicise.exiciseTarget;
		$scope.todayTask 		= exicise.todayTask;
		$scope.todayMotivation 	= exicise.todayMotivation;
		$scope.todayProgress 	= exicise.todayProgress;
		
	
	});


	
	$scope.Done = function Done(){
		$location.path('#/done');
	};
	
	$scope.Fault = function Fault(){
		$location.path('#/fault');
	};
	
}]);