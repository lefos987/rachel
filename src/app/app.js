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
				templateUrl: 'app/portfolio/list.view.html',
				controller: 'ConceptsCtrl'
			})
			.when('/concepts/:conceptId', {
				templateUrl: 'app/portfolio/item.view.html',
				controller: 'ConceptDetailsCtrl'
			})
			.when('/wireframes', {
				templateUrl: 'app/portfolio/list.view.html',
				controller: 'WireframesCtrl'
			})
			.when('/wireframes/:wireframeId', {
				templateUrl: 'app/portfolio/item.view.html',
				controller: 'WireframesDetailsCtrl'
			})
			.when('/user-journeys', {
				templateUrl: 'app/portfolio/list.view.html',
				controller: 'UserJourneysCtrl'
			})
			.when('/user-journeys/:userJourneyId', {
				templateUrl: 'app/portfolio/item.view.html',
				controller: 'UserJourneysDetailsCtrl'
			})
			.when('/design', {
				templateUrl: 'app/portfolio/list.view.html',
				controller: 'DesignCtrl'
			})
			.when('/design/:designId', {
				templateUrl: 'app/portfolio/item.view.html',
				controller: 'DesignDetailsCtrl'
			})
			.when('/clients', {
				templateUrl: 'app/portfolio/list.view.html',
				controller: 'ClientsCtrl'
			})
			.when('/clients/:clientId', {
				templateUrl: 'app/portfolio/item.view.html',
				controller: 'ClientsDetailsCtrl'
			})
			.when('/agency', {
				templateUrl: 'app/portfolio/list.view.html',
				controller: 'AgencyCtrl'
			})
			.when('/agency/:agencyId', {
				templateUrl: 'app/portfolio/item.view.html',
				controller: 'AgencyDetailsCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.html5Mode(true);
	}])
	.controller('AppCtrl', ['$scope', function ($scope) {
		$scope.message = 'Hello World';
	}]);