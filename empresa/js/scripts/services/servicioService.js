app.service('servicioService', ['$http', function($http){
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

    this.delete = function  (object) {
		var req = $http.delete(uri + '/app/servicios', object);
		return req;
	}

	this.getSectores = function  () {
		var req = $http.get(uri + '/app/sectores');
		return req;
	}



}])