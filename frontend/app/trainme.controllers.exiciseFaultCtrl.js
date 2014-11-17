angular.module('trainme').controller('exiciseFaultCtrl', ['$scope', 'configService', 'restClientService', function exiciseFaultCtrl($scope, configService, restClientService){
	
	var response = restClientService.ExercisesFault('squat', configService.Config.user.uid);
	
	$scope.exiciseName 			 = response.exiciseName;
	$scope.exiciseTarget 		 = response.exiciseTarget;
	$scope.title 						 = response.title;
	$scope.motivationMessage = response.motivationMessage;
	$scope.todayProgress 		 = response.todayProgress;
	$scope.nextExerciseDelay = response.nextExerciseDelay;
		
}]);