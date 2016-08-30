app.service('registrarService', ['$http', function($http){
	this.post = function  (object) {
		var req = $http.post(uri + '/app/profesionales', object);
		return req;
	}

		this.getDepartamentos = function  () {
		var req = $http.get(uri + '/app/departamentos');
		return req;
	}

		this.getMunicipio = function  () {
		var req = $http.get(uri + '/app/municipios');
		return req;
	}

}])
