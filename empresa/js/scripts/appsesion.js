var uri = "../api";
var app;
(function  () {
	app = angular.module("brackappsesion", ['ngRoute']);
	app.config(['$routeProvider', '$locationProvider',function AppConfig($routeProvider,$locationProvider) {
		$routeProvider
			.when("/inicio",{
                    templateUrl: '/sesion.html',
                    controller : 'loginCtrl'
            	}				
			)
			.when("/inicio",{
                    templateUrl: '/registrar.html',
                    controller : 'loginCtrl'
            	}				
			)
			.otherwise({
                redirectTo:"/inicio"
            });
	}])
})()