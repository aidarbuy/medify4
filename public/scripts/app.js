(function() {
	var app = angular.module('app', ['ngRoute', 'ngResource', 'uiGmapgoogle-maps']);

	app
		.config(function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					controller: 'MainController',
					templateUrl: '/views/main.html'
				})
				.when('/doctors', {
					controller: 'DoctorsController',
					templateUrl: '/views/doctors.html'
				})
				.otherwise({redirectTo: '/'});

			$locationProvider.html5Mode(true);
		})

		.config(function(uiGmapGoogleMapApiProvider) {
		    uiGmapGoogleMapApiProvider.configure({
		        //    key: 'your api key',
		        v: '3.17',
		        libraries: 'weather,geometry,visualization'
		    });
		});
}());
