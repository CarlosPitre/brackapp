app.controller('miproductoCtrl',  function($scope,productoService,pluginsService){
	

	$scope.Productos = [];

	loadProductos();
	$scope.Producto = {};

	$scope.openButton = true;





	
	function loadProductos () {
		var promiseGet = productoService.getProductos(); 
        promiseGet.then(function (pl) {
            $scope.Productos = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}



	$scope.nuevo = function  () {
		$scope.openButton = true;
		$('#modal-responsive').modal('show');

	}


	


	/*$scope.save = function  () {
		var datos = {
			descripcion : $scope.Servicio.descripcion,
			idSector : $scope.Servicio.idSector,
			porcentaje :  $scope.Servicio.porcentaje,
			idProfesional : "1"
		};
		var promiseGet = servicioService.post(datos); 
		promiseGet.then(function (pl) {
            alert(pl.data);
            loadServicios();
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}*/





/*	$scope.update = function  () {
		var datos = {
		descripcion : $scope.Servicio.descripcion,
			idSector : $scope.Servicio.idSector,
			porcentaje :  $scope.Servicio.porcentaje,
			idProfesional : "1"
		};
		var promiseGet = servicioService.put(datos); 
		promiseGet.then(function (pl) {
            alert(pl.data);
            loadServicios();
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}*/

	/*$scope.modificar = function  (servicio) {
		$scope.Servicio = servicio;
		$scope.openButton = false;
	} */

	 /*$scope.delete = function  (servicio) {
		console.log(JSON.stringify(datos));
		var datos = {
			idServicio : servicio.id,
			idProfesional : "1",
		}
		

		var promiseGet = servicioService.delete(datos); 
		promiseGet.then(function (pl) {
            alert(pl.data);
            loadServicios();
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}*/

})