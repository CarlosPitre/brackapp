var uri = "../api";
var app;
(function  () {
	app = angular.module("brackapp", ['ngRoute']);
	app.config(['$routeProvider', '$locationProvider',function AppConfig($routeProvider,$locationProvider) {
		$routeProvider
			.when("/inicio",{
                    templateUrl: 'pages/inicio.html',
                    controller : 'mainCtrl'
            	}				
			)
			.when("/empresa/miPerfil",{
                    templateUrl: 'pages/miperfil.html',
                    controller : 'miperfilCtrl'
            	}				
			)
			.when("/empresa/misServicios",{
                    templateUrl: 'pages/miservicios.html',
                    controller : 'miservicioCtrl'
            	}				
			)
			.when("/empresa/misProducto",{
                    templateUrl: 'pages/misproductos.html',
                    controller : 'miproductoCtrl'
            	}				
			)
			.otherwise({
                redirectTo:"/inicio"
            });
	}])
})()