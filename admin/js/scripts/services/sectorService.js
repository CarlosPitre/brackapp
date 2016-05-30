app.service('sectorService', ['$http', function($http){
	this.post = function  (object) {
		var req = $http.post(uri + '/app/sectores', object);
		return req;
	}
}])