angular.module('trainme').controller('todayCtrl', 
		[
			'$scope', 
			'$location', 
			'configService', 
			'restClientService', 
	
function todayCtrl($scope, $location, configService, restClientService){
	
	var response = restClientService.GetTodayExercisesForUser(configService.Config.user.uid);
	
	$scope.todayExercises = response;
	
	$scope.StartExercise = function StartExercise(index){
		$location.path('#/excercise/'+ response[index].exiciseId);
	};
}]);