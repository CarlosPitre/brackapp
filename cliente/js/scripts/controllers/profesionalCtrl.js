app.controller('profesionalCtrl', function($scope,profesionalService,$routeParams,pluginsService,clienteService,serverData){

	$scope.rate = 2;
	$scope.max = 5;
	$scope.isReadonly = true;
	$scope.idProfesional;
	$scope.mostrar1 = true;

	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value / $scope.max);
	};


	$scope.Profesionales = [];
	$scope.Profesional= {};

	getProfesionales();

	function getProfesionales () {

		//alert();
		console.log(JSON.stringify(serverData.json));
		var promiseGet = profesionalService.postJSON(serverData.json); 
        promiseGet.then(function (pl) {
            $scope.Profesionales = pl.data.profesionales;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

	$scope.Detalles = function  (profesional) {

		$scope.Profesional = profesional;

		if (profesional.status == false) {
			profesional.status = true;
			profesional.button = "Ver Menos";
			if (profesional.mapa == false) {
				profesional.mapa = true;
				initMap(profesional.id);
			};
			
		}else{
			profesional.status = false;
			profesional.button = "Ver Mas";
		};

		
		/*$scope.idProfesional = profesional.id;
		var idCliente = localStorage.getItem("idCliente_br")
		if (idCliente == null) {			
			$('#modalProfesional').modal('show');
		}else{
			llamarVista();
		};		*/ 
	}


	function initMap(id) {
    	
      	var directionsDisplay = new google.maps.DirectionsRenderer;
		var directionsService = new google.maps.DirectionsService;
		var map = new google.maps.Map(document.getElementById('map' + id), {
			zoom: 14,
			center: {lat: 37.77, lng: -122.447}
		});

		directionsDisplay.setMap(map);

		calculateAndDisplayRoute(directionsService, directionsDisplay);
		document.getElementById('mode').addEventListener('change', function() {
			calculateAndDisplayRoute(directionsService, directionsDisplay);
		});

    }

    function calculateAndDisplayRoute(directionsService, directionsDisplay ) {

		var selectedMode = document.getElementById('mode').value;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {

				var latitud = parseFloat($scope.Profesional.latitud);
				var longitud = parseFloat($scope.Profesional.longitud);		  

		       directionsService.route({
					origin: {lat: position.coords.latitude, lng: position.coords.longitude},  
					destination: {lat: latitud, lng: longitud},  
					travelMode: google.maps.TravelMode[selectedMode]
					}, function(response, status) {
					if (status == google.maps.DirectionsStatus.OK) {
					  directionsDisplay.setDirections(response);
					} else {
					  window.alert('Directions request failed due to ' + status);
					}
				});

		    }, function() {
		      
		    });
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