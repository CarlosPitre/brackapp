app.controller('serviciosCtrl',  function($scope,serviciosService){
	$scope.Servicios = [];

	loadServicios();
	$scope.Servicio = {};

	$scope.tiposservicios = [];

	loadtiposservicios();
	$scope.tiposservicios = {};

	$scope.openButton = true;

	function loadServicios () {
		var promiseGet = serviciosService.getServicios(); 
        promiseGet.then(function (pl) {
            $scope.Servicios = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

$scope.save = function  () {
		var datos = {
			descripcion : $scope.Servicio.descripcion,
			idTipo: $scope.Servicio.tipo
		};
		var promiseGet = serviciosService.post(datos); 
		promiseGet.then(function (pl) {
            alert(pl.data);
            loadServicios();
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}


     $scope.update = function  () {
		var datos = {
			id : $scope.Servicio.id,
			descripcion : $scope.Servicio.descripcion,
			idTipo: $scope.Servicio.tipo

		};
		var promiseGet = serviciosService.put(datos); 
		promiseGet.then(function (pl) {
            alert(pl.data);
            loadServicios();
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

	$scope.modificar = function  (servicio) {
		$scope.Servicio = servicio;
		$scope.openButton = false;
	}

	$scope.delete = function  (id) {
		alert("datos eliminados correctamente");
		var promiseGet = serviciosService.delete(id); 
		promiseGet.then(function (pl) {
            alert(pl.data);
            loadServicios();
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}


	
	function loadtiposservicios () {
		var promiseGet = serviciosService.getTiposservicios(); 
        promiseGet.then(function (pl) {
            $scope.tiposservicios = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}
})