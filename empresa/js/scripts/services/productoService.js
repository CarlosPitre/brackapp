app.service('productoService', ['$http', function($http){
	/*this.post = function  (object) {
		var req = $http.post(uri + '/app/servicios', object);
		return req;
	}*/
	this.getProductos = function  () {
		var req = $http.get(uri + '/app/productos');
		return req;
	}

	this.getMarcas = function  () {
		var req = $http.get(uri + '/app/marcas');
		return req;
	}



	/*
	this.put = function  (object) {
		var req = $http.put(uri + '/app/servicios', object);
		return req;
	}*/

    /* this.delete = function  (object) {
		var req = $http.post(uri + '/app/servicios/delete', object);
		return req;
	} */

	/*this.getSectores = function  () {
		var req = $http.get(uri + '/app/sectores');
		return req;
	} */



}])