app.controller('registrarCtrl',  function($scope,registrarService,pluginsService){


	$scope.Profesionales = [];
	$scope.Profesional = {};

	$scope.save = function  () {
		var datos = {
			descripcion : $scope.Productos.descripcion,
			marca : $scope.Productos.marca,
			porcentaje :  $scope.Productos.porcentaje,
			idProfesional : $scope.idProfesional
		};

		var promiseGet = productoService.post(datos);
		promiseGet.then(function (pl) {
            alert(pl.data.message);
            loadProductos();
						$scope.guardarfoto($scope.idProfesional,pl.data.idProducto)
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

})
