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
			
			.otherwise({
                redirectTo:"/inicio"
            });
	}])
})()