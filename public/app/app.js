(function() {

	angular.module('app', ['ngResource']);

	angular.module('app').controller('MainController', [ 
		'$scope', '$resource', 'DoctorsFactory',

		function($scope, $resource, DoctorsFactory) {
			$scope.doctors = $resource('/api/doctors').query();

			$scope.submit = function () {
				var doctor = {
					name: $scope.name,
					description: $scope.description
				};
				DoctorsFactory.save(doctor);
			};
	}]);

}());