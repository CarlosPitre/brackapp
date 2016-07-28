app.controller('miproductoCtrl',  function($scope,productoService,pluginsService){
	

	$scope.Productos = [];
    $scope.idProfesional = 1;

	loadProductos();
	$scope.Producto = {};

	$scope.openButton = true;


	$scope.Marcas = [];

	loadMarcas();
	$scope.Marca = {};





	
	function loadProductos () {
		var promiseGet = productoService.getProductos($scope.idProfesional); 
        promiseGet.then(function (pl) {
            $scope.Productos = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}


	function loadMarcas () {
		var promiseGet = productoService.getMarcas(); 
        promiseGet.then(function (pl) {
            $scope.Marcas = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}



	$scope.nuevo = function  () {
		$scope.openButton = true;
		$('#modal-responsive').modal('show');

	}


	


	$scope.save = function  () {
		var datos = {
			descripcion : $scope.Productos.descripcion,
			marca : $scope.Productos.marca,
			porcentaje :  $scope.Productos.porcentaje,
			idProfesional : "1"
		};
		console.log(JSON.stringify(datos));
		var promiseGet = productoService.post(datos); 
		promiseGet.then(function (pl) {
            alert(pl.data);
            loadProductos();

        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}





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

	 $scope.delete = function  (producto) {
	 	console.log(JSON.stringify(datos));
		var datos = {
			idProducto : producto.id,
			idMarca : producto.idMarca,
			idProfesional : "1",
		}
		

		var promiseGet = productoService.delete(datos); 
		promiseGet.then(function (pl) {
            alert(pl.data);
            loadProductos();
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

})