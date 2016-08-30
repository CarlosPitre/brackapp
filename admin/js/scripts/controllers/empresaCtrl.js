app.controller('empresaCtrl', function ($scope, empresaService) {

  $scope.Profesionales = [];

  function loadProfesionales() {
    var promiseGet = empresaService.getEmpresas();
    promiseGet.then(function (pl) {
        $scope.Profesionales = pl.data;
    },
    function (errorPl) {
    	console.log('Error Al Cargar Datos', errorPl);
    });
  }

})
