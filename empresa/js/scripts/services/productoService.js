app.service('productoService', ['$http', function($http){
	this.post = function  (object) {
		var req = $http.post(uri + '/app/productos', object);
		return req;
	}
	this.getProductos = function  (id) {
		var req = $http.get(uri + '/app/productos/' + id );
		return req;
	}

	this.getMarcas = function  () {
		var req = $http.get(uri + '/app/marcas');
		return req;
	}

	 this.delete = function  (object) {
		var req = $http.post(uri + '/app/productos/delete', object);
		return req;
	}


}])