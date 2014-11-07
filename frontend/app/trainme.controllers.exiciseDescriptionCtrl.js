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