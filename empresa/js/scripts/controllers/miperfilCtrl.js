app.controller('miperfilCtrl', function($scope,miperfilService,$routeParams,pluginsService){
	


   

	$scope.Profesionales = [];
	$scope.Profesional = {};
	$scope.idProfesional = "1" //localstorage.getItem("idPro")


	loadDatos();






	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value / $scope.max);
	};


	function loadDatos () {
		var promiseGet = miperfilService.getDatos($scope.idProfesional); 
        promiseGet.then(function (pl) {
            $scope.Profesional = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}



	$scope.update = function  () {
		var datos = { 
			id: $scope.Profesional.id,
			razonSocial : $scope.Profesional.razonSocial,
			identificacion : $scope.Profesional.identificacion,
			correo : $scope.Profesional.correo,
			telefono : $scope.Profesional.telefono,
			experiencia : $scope.Profesional.experiencia
		};
		var promiseGet = miperfilService.put(datos); 
		promiseGet.then(function (pl) {
            alert(pl.data);
            loadDatos();
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

	

})