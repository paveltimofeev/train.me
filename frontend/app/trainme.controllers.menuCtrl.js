angular.module('trainme').controller('menuCtrl', ['$scope', 'configService', 'restClientService', function menuCtrl($scope, configService, restClientService){

	$scope.menu = restClientService.GetMenu(configService.Config.user.uid);
	
}]);