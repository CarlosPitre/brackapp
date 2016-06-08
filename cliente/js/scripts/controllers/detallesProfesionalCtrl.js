app.controller('detallesProfesionalCtrl', function($scope,$routeParams,profesionalService){
	
	$scope.Profesional = {};

	loadDatos();


	function loadDatos () {
		var promiseGet = profesionalService.getDatos($routeParams.idProfesional); 
        promiseGet.then(function (pl) {
            $scope.Profesionale = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

	



})