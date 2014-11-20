/// Backend's service
angular.module('trainme').service('restClientService', ['$http', '$location', 'configService', function restClientService($http, $location, configService){
	
		var restUrl = configService.Config.backend.restServiceUrl;
		
		
		// REST GET: /api/exercise/:id
		this.GetExerciseDescription = function GetExerciseDescription(exerciseId, callback)
		{
			$http.jsonp(restUrl+'/api/exercise/'+exerciseId).
				  success(function(data, status, headers, config) {
				    // this callback will be called asynchronously
				    // when the response is available
				    callback(data);
				  }).
				  error(function(data, status, headers, config) {
				    // called asynchronously if an error occurs
				    // or server returns response with an error status.
				    $location.path('#/error/'+status);
				  });
		};
		
		// REST GET: /api/today/:user
		this.GetTodayExercisesForUser = function GetTodayExercisesForUser(user, callback)
		{
			$http.jsonp(restUrl+'/api/today/'+user).
				  success(function(data, status, headers, config) {
				    callback(data);
				  });
		};
	
		// REST GET: /api/exercise/:id/:user
		this.GetExerciseForUser = function GetExerciseForUser(exerciseId, user)
		{
			$http.jsonp(restUrl+'/api/exercise/' + exerciseId + '/' + user).
				  success(function(data, status, headers, config) {
				    return data;
				  });
		};
		
		// ? REST POST: /api/exercise/subscribe/:id/:user
		this.SubscribeExercise = function SubscribeExercise(exerciseId, user)
		{
			$http.post(restUrl+'/api/exercise/subscribe/', { id:exerciseId, user:user } ).
				  success(function(data, status, headers, config) {
				    return data;
				  }).
				  error(function(data, status, headers, config) {
				    $location.path('#/error/'+status);
				  });
		};
		
		// REST POST: /api/exercise/done
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
		
		// REST POST: /api/exercise/fault
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
		
		// REST GET: /api/menu/
		this.GetMenu = function GetMenu(user)
		{
			$http.jsonp(restUrl+'/api/menu/').
				  success(function(data, status, headers, config) {
				    return data;
				  });
		
		}
	
}]);