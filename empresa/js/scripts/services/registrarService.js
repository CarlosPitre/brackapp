app.service('registrarService', ['$http', function($http){
	this.post = function  (object) {
		var req = $http.post(uri + '/app/profesionales', object);
		return req;
	}
}])
