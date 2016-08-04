app.service('solicitudeService', ['$http', function($http){
	
	this.getSolicitudes = function  (id) {
		var req = $http.get(uri + '/app/solicitudes/' + id );
		return req;
	}


	this.getRespuesta = function  () {
		var req = $http.get(uri + '/app/respuesta');
		return req;
	}

}])