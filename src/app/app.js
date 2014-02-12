'use strict';

angular.module('app', ['templates', 'common', 'ngRoute', 'ngAnimate',
	'navigation', 'hero', 'info', 'portfolio', 'contact'])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/portfolio/portfolio.view.html',
				controller: 'PortfolioCtrl'
			})
			.when('/concepts', {
				templateUrl: 'app/portfolio/concepts/concepts.view.html',
				controller: 'ConceptsCtrl'
			})
			.when('/concepts/:conceptId', {
				templateUrl: 'app/portfolio/concepts/concept-details.view.html',
				controller: 'ConceptDetailsCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.html5Mode(true);
	}])
	.controller('AppCtrl', ['$scope', function ($scope) {
		$scope.message = 'Hello World';
	}]);