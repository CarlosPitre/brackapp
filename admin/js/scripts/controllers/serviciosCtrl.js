app.controller('serviciosCtrl',  function($scope,serviciosService){
	$scope.Servicios = [];

	loadServicios();
	$scope.Servicio = {};

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



})