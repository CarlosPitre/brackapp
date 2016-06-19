app.controller('miservicioCtrl',  function($scope,servicioService,pluginsService){
	

	$scope.Servicios = [];

	loadServicios();
	$scope.Servicio = {};

	$scope.openButton = true;



	$scope.Sectores = [];

	loadSectores();
	$scope.Sectores = {};


	
	function loadServicios () {
		var promiseGet = servicioService.getServicios(); 
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


	function loadSectores () {
		var promiseGet = servicioService.getSectores(); 
        promiseGet.then(function (pl) {
            $scope.Sectores = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}








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





	$scope.update = function  () {
		var datos = {
			id : $scope.Sector.id,
			descripcion : $scope.Sector.descripcion
		};
		var promiseGet = sectorService.put(datos); 
		promiseGet.then(function (pl) {
            alert(pl.data);
            loadSectores();
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

	$scope.modificar = function  (sector) {
		$scope.Sector = sector;
		$scope.openButton = false;
	}

	$scope.delete = function  (id) {
		alert("message");
		var promiseGet = servicioService.delete(id); 
		promiseGet.then(function (pl) {
            alert(pl.data);
            loadServicios();
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

})