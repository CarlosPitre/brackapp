app.controller('registrarCtrl',  function($scope,registrarService){


	$scope.Profesionales = [];
	$scope.Profesional = {};



	$scope.Departamentos = [];

	loadDepartamentos();
	$scope.Departamento = {};
     
    $scope.Municipios = [];
    $scope.Municipio = {};

 
    $scope.buscarMunicipio = function  () {
    
    var promiseGet = registrarService.getMunicipio($scope.Profesional.idDepartamento );
        promiseGet.then(function (pl) {
            $scope.Municipios = pl.data;
        },
        function (errorPl) {
        	console.log('Error De Servidor Cv', errorPl);
        });	 

    }



	function loadDepartamentos () {
		var promiseGet = registrarService.getDepartamentos();
        promiseGet.then(function (pl) {
            $scope.Departamentos = pl.data;
        },
        function (errorPl) {
        	console.log('Error De Servidor Cv', errorPl);
        });
	}


	$scope.save = function  () {
		var datos = {
			razonSocial : $scope.Productos.descripcion,
			marca : $scope.Productos.marca,
			porcentaje :  $scope.Productos.porcentaje,
			idProfesional : $scope.idProfesional
		};

		var promiseGet = productoService.post(datos);
		promiseGet.then(function (pl) {
            alert(pl.data.message);
            loadProductos();
						$scope.guardarfoto($scope.idProfesional,pl.data.idProducto)
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

})
