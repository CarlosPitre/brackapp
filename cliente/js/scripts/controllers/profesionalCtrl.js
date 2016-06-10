app.controller('profesionalCtrl', function($scope,profesionalService,$routeParams,pluginsService,clienteService){

	$scope.rate = 2;
	$scope.max = 5;
	$scope.isReadonly = true;
	$scope.idProfesional;
	$scope.titleButton = "Ver mas";
	$scope.mostrar1 = true;

	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value / $scope.max);
	};


	$scope.Profesionales = [];
	$scope.Profesional= {};

	getProfesionales();

	function getProfesionales () {
		var promiseGet = profesionalService.get($routeParams.idServicio); 
        promiseGet.then(function (pl) {
            $scope.Profesionales = pl.data.profesionales;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

	$scope.Detalles = function  (profesional) {
		$scope.idProfesional = profesional.id;
		var idCliente = localStorage.getItem("idCliente_br")
		if (idCliente == null) {			
			$('#modalProfesional').modal('show');
		}else{
			llamarVista();
		};		 
	}

	$scope.login = function  () {
		var data = {
			user : $scope.user,
			pass : $scope.pass
		};
		var promiseGet = clienteService.login(data); 
        promiseGet.then(function (pl) {
        	var status = pl.data.status;
        	if (status == 1) {
        		localStorage.setItem("idCliente_br",pl.data.usuario.idCliente);
        		localStorage.setItem("idPerfil_br",pl.data.usuario.idPerfil);
        		localStorage.setItem("idUsuario_br",pl.data.usuario.id);
        		llamarVista();
        	}else{
        		alert(pl.data.message)
        	};
            
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

	function llamarVista () {
		window.location = "#/profesional/" + $scope.idProfesional;
	} 


})