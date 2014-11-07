/// User identity service
angular.module('trainme').service('uidService', function uidService($http){

	var uid = null;
	
	function CreateUid()
	{
		uid = 'my-uid';
	}

	this.GetUid = function GetUid()
	{
		if(uid === null)
			CreateUid(); 
			
		return uid;
	};

});