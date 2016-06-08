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
})()