app.controller('solicitudesCtrl',  function($scope,solicitudeService,pluginsService){
	

	$scope.Solicitudes = [];
    $scope.idProfesional = 1;

	loadSolicitudes();
	$scope.Solicitud = {};

 
	$scope.Respuestas = [];

	loadRespuestas();
	$scope.Respuesta = {};
	
	




	
	function loadSolicitudes () {
		var promiseGet = solicitudeService.getSolicitudes($scope.idProfesional); 
        promiseGet.then(function (pl) {
            $scope.Solicitudes = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}


	function loadRespuestas () {
		var promiseGet = solicitudeService.getRespuestas(); 
        promiseGet.then(function (pl) {
            $scope.Respuestas = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}



/*	function loadMarcas () {
		var promiseGet = productoService.getMarcas(); 
        promiseGet.then(function (pl) {
            $scope.Marcas = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}*/



	/*$scope.save = function  () {
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
	}*/


	 /*$scope.delete = function  (producto) {
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
	}*/

})