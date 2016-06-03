app.controller('profesionalCtrl', function($scope,profesionalService,$routeParams,pluginsService){


	 $scope.$on('$viewContentLoaded', function () { 
        
	      /**** DATE AND TIME PLUGINS ****/

	      /* Inline Date & Time picker */
	      $('#inline_datetimepicker').datetimepicker({
	          altField: "#inline_datetimepicker_alt",
	          altFieldTimeOnly: false,
	          isRTL: $('body').hasClass('rtl') ? true : false
	      });

	      /**** COLOR PICKER PLUGINS ****/

	      /* Color Picker */
	      /* You can initialize all options directly in input except for palette */
	      $("#colorpicker1").spectrum({
	          palette: [
	              ['black', 'white', 'blanchedalmond'],
	              ['rgb(255, 128, 0);', 'hsv 100 70 50', 'lightyellow']
	          ]
	      });

	      $("#colorpicker2").spectrum({
	          palette: [
	              ['black', 'white', 'blanchedalmond',
	              'rgb(255, 128, 0);', 'hsv 100 70 50'],
	              ['red', 'yellow', 'green', 'blue', 'violet']
	          ]
	      });

	      $("#colorpicker1, #colorpicker2").show();

	      
	      pluginsService.init();
	  });

	$scope.Profesionales = [];
	$scope.Profesional= {};

	getProfesionales();

	function getProfesionales () {
		var promiseGet = profesionalService.get($routeParams.idServicio); 
        promiseGet.then(function (pl) {
            $scope.Profesionales = pl.data.profesionales;
        },
        function (errorPl) {
        	console.log('Error Al Cargar Datos', errorPl);
        });
	}


})