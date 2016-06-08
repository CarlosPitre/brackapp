app.service('serviciosService', ['$http', function($http){
	this.post = function  (object) {
		var req = $http.post(uri + '/app/servicios', object);
		return req;
	}
	this.getServicios = function  () {
		var req = $http.get(uri + '/app/servicios');
		return req;
	}
	this.put = function  (object) {
		var req = $http.put(uri + '/app/servicios', object);
		return req;
	}

    this.delete = function  (id) {
		var req = $http.delete(uri + '/app/servicios/' + id);
		return req;
	}
	
	this.getTiposservicios = function  () {
		var req = $http.get(uri + '/app/tiposservicios');
		return req;
	}

}])