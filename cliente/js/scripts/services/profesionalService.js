app.service('profesionalService', function($http){
	this.get = function  (idServicio) {
		var req = $http.get(uri + '/app/servicio/' + idServicio + '/profesionales');
		return req;
	}
})