var uri = "../api";
var app;
(function  () {
	app = angular.module("brackapp", ['ngRoute','angucomplete']);
	app.config(['$routeProvider', '$locationProvider',function AppConfig($routeProvider,$locationProvider) {
		$routeProvider
			.when("/inicio",{
                    templateUrl: 'pages/inicio.html',
                    controller : 'mainCtrl'
            	}				
			)
			.otherwise({
                redirectTo:"/inicio"
            });
	}])
})()