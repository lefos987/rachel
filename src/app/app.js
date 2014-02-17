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
			.when('/wireframes', {
				templateUrl: 'app/portfolio/wireframes/wireframes.view.html',
				controller: 'WireframesCtrl'
			})
			.when('/user-journeys', {
				templateUrl: 'app/portfolio/user-journeys/user-journeys.view.html',
				controller: 'UserJourneysCtrl'
			})
			.when('/design', {
				templateUrl: 'app/portfolio/design/design.view.html',
				controller: 'DesignCtrl'
			})
			.when('/clients', {
				templateUrl: 'app/portfolio/clients/clients.view.html',
				controller: 'ClientsCtrl'
			})
			.when('/agency', {
				templateUrl: 'app/portfolio/agency/agency.view.html',
				controller: 'AgencyCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.html5Mode(true);
	}])
	.controller('AppCtrl', ['$scope', function ($scope) {
		$scope.message = 'Hello World';
	}]);