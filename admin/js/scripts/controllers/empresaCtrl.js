app.controller('empresaCtrl', function ($scope, empresaService) {

  $scope.Profesionales = [];
  loadProfesionales()

  function loadProfesionales() {
    var promiseGet = empresaService.getEmpresas();
    promiseGet.then(function (pl) {
        $scope.Profesionales = pl.data;
        console.log(JSON.stringify($scope.Profesionales));
    },
    function (errorPl) {
    	console.log('Error Al Cargar Datos', errorPl);
    });
  }

  $scope.openModal = function  (profesional) {
    $scope.Profesional = profesional;
    $("#modalPago").modal("show");
  }

  $scope.savePago = function  () {
    var data = {
      idProfesional : $scope.Profesional.id,
      valorPago : $scope.Profesional.valorPago
    };
    var promiseGet = empresaService.postPago(data);
    promiseGet.then(function (pl) {
        loadProfesionales()
    },
    function (errorPl) {
      console.log('Error Al Cargar Datos', errorPl);
    });
  }

})
