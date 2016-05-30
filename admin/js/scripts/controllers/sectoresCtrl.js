app.controller('sectoresCtrl',  function($scope,sectorService){
	$scope.Sectores = [];

	loadSectores();
	
	function loadSectores () {
		var promiseGet = sectorService.getSectores(); 
        promiseGet.then(function (pl) {
            $scope.Sectores = pl.data;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}
})