app.service('menuService', function($http){
	this.getMenu = function  (idPerfil) {
		console.log(uri + '/app/menu/' + idPerfil);
		var req = $http.get(uri + '/app/perfil/' + idPerfil + '/menu');
		return req;
	}
})