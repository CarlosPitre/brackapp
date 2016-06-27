app.controller('profesionalCtrl', function($scope,profesionalService,$routeParams,pluginsService,clienteService,serverData){

	$scope.rate = 2;
	$scope.max = 5;
	$scope.isReadonly = true;
	$scope.idProfesional;
	$scope.open = true;

	$scope.Profesionales = [];
	$scope.Profesional= {};
	$scope.filtro = "1";

	getProfesionales();

	function getProfesionales () {
		console.log(JSON.stringify(serverData.json));
		var promiseGet = profesionalService.postJSON(serverData.json); 
        promiseGet.then(function (pl) {
            $scope.Profesionales = pl.data.profesionales;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

	function getProfesionalesVisitados () {
		var promiseGet = profesionalService.postJSONVisitados(serverData.json); 
        promiseGet.then(function (pl) {
            $scope.Profesionales = pl.data.profesionales;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}

	$scope.Filtro = function  () {

		switch($scope.filtro) {
			case "1":
				getProfesionales()
				break;
			case "3":
				getProfesionalesVisitados()
				break;
		}
	}	

	$scope.Mapa = function  () {

		$scope.open = false;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var map = new google.maps.Map(document.getElementById('map'), {
					zoom: 14,
					center: {lat: position.coords.latitude, lng:position.coords.longitude}
				});	 
				var marker = new google.maps.Marker({
					position: {lat: position.coords.latitude, lng:position.coords.longitude},
					map: map,
					animation: google.maps.Animation.DROP											
				});
				var label = "Mi Posición";
				(function(marker, label) {
		            google.maps.event.addListener(marker, 'click', function() {
			            var infoWindow = new google.maps.InfoWindow({mapa: map});
			            infoWindow.setContent(label);
			            infoWindow.open(map, marker);				        
			        });
	  			})(marker, label);


				for (var i = 0; i < $scope.Profesionales.length; i++) {
					
					var image = {
						url:  $scope.Profesionales[i].foto,
						size: new google.maps.Size(71, 71),
						origin: new google.maps.Point(0, 0),
						anchor: new google.maps.Point(17, 34),
						scaledSize: new google.maps.Size(25, 25)
					};
					var marker = new google.maps.Marker({
						position: {lat: parseFloat($scope.Profesionales[i].latitud), lng: parseFloat($scope.Profesionales[i].longitud)},
						label : $scope.Profesionales[i].razonSocial,
						map: map,
						animation: google.maps.Animation.DROP											
					});
					marker.setIcon(image);
					var label = $scope.Profesionales[i].razonSocial;
					(function(marker, label) {
			            google.maps.event.addListener(marker, 'click', function() {
				            var infoWindow = new google.maps.InfoWindow({mapa: map});
				            infoWindow.setContent(label);
				            infoWindow.open(map, marker);				        
				        });
		  			})(marker, label);
				};
				

				
		    }, function() {
		      
		    });
		};

		
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