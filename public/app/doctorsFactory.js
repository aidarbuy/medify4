(function() {

	angular.module('app').factory('DoctorsFactory', [
		'$resource', 

		function ($resource) {
			return $resource('/api/doctors');
		}
	]);

}());