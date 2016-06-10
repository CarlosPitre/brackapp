var uri = "../api";
var app;
(function  () {
	app = angular.module("brackapp", ['ngRoute','angucomplete','ui.bootstrap']);
	app.config(['$routeProvider', '$locationProvider',function AppConfig($routeProvider,$locationProvider) {
		$routeProvider
			.when("/inicio",{
                    templateUrl: 'pages/inicio.html',
                    controller : 'mainCtrl'
            	}				
			)
			.when("/servicio/:idServicio/profesionales",{
					templateUrl : 'pages/profesionales.html',
					controller : 'profesionalCtrl'
			})
			.when("/profesional/:idProfesional",{
					templateUrl : 'pages/detallesProfesional.html',
					controller : 'detallesProfesionalCtrl'
			})


			.otherwise({
                redirectTo:"/inicio"
            });
	}]);

	app.factory('MarkerCreatorService', function () {

	    var markerId = 0;

	    function create(latitude, longitude) {
	        var marker = {
	            options: {
	                animation: 1,
	                labelAnchor: "28 -5",
	                labelClass: 'markerlabel'    
	            },
	            latitude: latitude,
	            longitude: longitude,
	            id: ++markerId          
	        };
	        return marker;        
	    }

	    function invokeSuccessCallback(successCallback, marker) {
	        if (typeof successCallback === 'function') {
	            successCallback(marker);
	        }
	    }

	    function createByCoords(latitude, longitude, successCallback) {
	        var marker = create(latitude, longitude);
	        invokeSuccessCallback(successCallback, marker);
	    }

	    function createByAddress(address, successCallback) {
	        var geocoder = new google.maps.Geocoder();
	        geocoder.geocode({'address' : address}, function (results, status) {
	            if (status === google.maps.GeocoderStatus.OK) {
	                var firstAddress = results[0];
	                var latitude = firstAddress.geometry.location.lat();
	                var longitude = firstAddress.geometry.location.lng();
	                var marker = create(latitude, longitude);
	                invokeSuccessCallback(successCallback, marker);
	            } else {
	                alert("Unknown address: " + address);
	            }
	        });
	    }

	    function createByCurrentLocation(successCallback) {
	        if (navigator.geolocation) {
	            navigator.geolocation.getCurrentPosition(function (position) {
	                var marker = create(position.coords.latitude, position.coords.longitude);
	                invokeSuccessCallback(successCallback, marker);
	            });
	        } else {
	            alert('Unable to locate current position');
	        }
	    }

	    return {
	        createByCoords: createByCoords,
	        createByAddress: createByAddress,
	        createByCurrentLocation: createByCurrentLocation
	    };

	});
})()