app.controller('detallesProfesionalCtrl', function($scope,$routeParams,profesionalService){
	
	$scope.Profesional = {};
	$scope.nombre = "Carlos Pitre";

	loadDatos();


	function loadDatos () {
		var promiseGet = profesionalService.getDatos($routeParams.idProfesional); 
        promiseGet.then(function (pl) {
            $scope.Profesional = pl.data;
            console.log(JSON.stringify($scope.Profesional));

        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

	



})