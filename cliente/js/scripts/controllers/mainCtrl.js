app.controller('mainCtrl', function($scope,menuService){
	
	$(function  () {
		$scope.Servicio = [
			{
				id: 0,
				sector: "sistemas",
				name: "Dejesus ",
				tipo: "producto"
			},
			{
				id: 1,
				sector: "sistemas",
				name: "Burch ",
				tipo: "producto"
			},
			{
				id: 2,
				sector: "electronica",
				name: "Marisa ",
				tipo: "producto"
			},
			{
				id: 3,
				sector: "electronica",
				name: "Wolfe ",
				tipo: "servicio"
			},
			{
				id: 4,
				sector: "plomeria",
				name: "Walton ",
				tipo: "servicio"
			}
		];

		 $('#demo1').typeahead({
		        source: $scope.Servicio,
		        display: 'name,sector',
		        itemSelected: displayResult
		    });
	})

	function displayResult(item, val, text) {
	    console.log(item);

	    //$('.alert').show().html('You selected <strong>' + val + '</strong>: <strong>' + text + '</strong>');
	}

	$scope.Servicio = [];
	$scope.idPerfil = "1";
	//loadMenu();
	loadServicio();

	function loadMenu () {
		var promiseGet = menuService.getAleatorios(); 
        promiseGet.then(function (pl) {
            $scope.Servicio = pl.data;
            console.log(JSON.stringify($scope.Servicio));
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

	function loadServicio () {
				

	}

	$scope.Buscar = function  (id) {
		if (id == null) {
			alert("Por Escribe Un Servicio")
		}else{
			window.location = '#/servicio/' + id + '/profesionales';
		};
	}




})