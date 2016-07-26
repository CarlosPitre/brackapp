app.controller('miservicioCtrl',  function($scope,servicioService,pluginsService){
	

	$scope.Servicios = [];
	$scope.idProfesional = 1;

	loadServicios();
	$scope.Servicio = {};

	$scope.openButton = true;

	

	$scope.Sectores = [];
	$scope.Sectores = {};


	
	function loadServicios () {
		var promiseGet = servicioService.getServicios($scope.idProfesional); 
        promiseGet.then(function (pl) {
            $scope.Servicios = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}



	$scope.nuevo = function  () {

		$scope.Servicio = {};
		$scope.openButton = true;
		$('#modal-responsive').modal('show');

	}


	/*function loadSectores () {
		var promiseGet = servicioService.getSectores(); 
        promiseGet.then(function (pl) {
            $scope.Sectores = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}*/








	$scope.save = function  () {
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
	}





	/*$scope.update = function  () {
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

	$scope.modificar = function  (servicio) {
		$scope.Servicio = servicio;
		$scope.openButton = false;
	}

	$scope.delete = function  (servicio) {
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
	}

})