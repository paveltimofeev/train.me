/// Controllers (will be moved to separate files)

angular.module('trainme').controller('exiciseDoneCtrl', ['$scope', 'configService', 'restClientService', function exiciseDoneCtrl($scope, configService, restClientService){
	
	var response = restClientService.ExercisesDone('squat', configService.Config.user.uid);
	
	$scope.exiciseName 			 = response.exiciseName;
	$scope.exiciseTarget 		 = response.exiciseTarget;
	$scope.title 						 = response.title;
	$scope.motivationMessage = response.motivationMessage;
	$scope.todayProgress 		 = response.todayProgress;
	$scope.nextExerciseDelay = response.nextExerciseDelay;
	
}]);