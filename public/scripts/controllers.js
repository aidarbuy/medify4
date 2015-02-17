(function() {
	angular.module('app')

	.controller('MainController', function($scope, uiGmapGoogleMapApi) {
		$scope.mainMessage = "Main Controller";

		uiGmapGoogleMapApi.then(function(maps) {
			$scope.maps = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
		});
	})

	.controller('DoctorsController', function($scope, $resource, DoctorsFactory, uiGmapGoogleMapApi) {
		$scope.doctors = $resource('/api/doctors').query();

		$scope.submit = function () {
			var doctor = {
				name: $scope.name,
				description: $scope.description
			};
			DoctorsFactory.save(doctor);
		};

		$scope.retreiveDoctor = function () {
			// body...
		};

		$scope.markers = [];

	    // uiGmapGoogleMapApi is a promise.
	    // The "then" callback function provides the google.maps object.
	    uiGmapGoogleMapApi.then(function(maps) {
			$scope.maps = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
	    });
	})

	.controller('DoctorController', function($scope, $resource, DoctorsFactory) {
		// $scope.doctor = $resource('/api/doctors').query();
	});
}());
