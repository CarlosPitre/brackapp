app.controller('mainCtrl', function($scope,menuService){
	
	$scope.Servicio = [];
	$scope.idPerfil = "1";

	loadServicio();

	/*function loadMenu () {
		var promiseGet = menuService.getMenu($scope.idPerfil); 
        promiseGet.then(function (pl) {
            $scope.Menu = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}*/

	function loadServicio () {
		$scope.Servicio = [
			{
				id : "1",
				descripcion : "Mantenimiento de Computadores",
				tipo : "Servicio",
				sector : "Sistemas"
			},
			{
				id : "2",
				descripcion : "Pulidora",
				tipo : "Producto",
				sector : "Hogar"
			},
			{
				id : "3",
				descripcion : "Arreglo de Uñas",
				tipo : "Servicio",
				sector : "Estetica"
			}
		]
	}

	$scope.Buscar = function  (id) {
		alert(id);
		window.location = '#/servicio/' + id + '/profesionales';

		//href("#/sectores/"+id+'/profesionales');
	}




})