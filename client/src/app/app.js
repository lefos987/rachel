'use strict';

angular.module('app', ['templates', 'common', 'ngRoute', 'ngAnimate',
	'navigation', 'hero', 'info', 'portfolio', 'contact'])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/portfolio/list.view.html',
				controller: 'PortfolioCtrl'
			})
			.when('/company/:companyId', {
				templateUrl: 'app/portfolio/item.view.html',
				controller: 'CompanyCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.html5Mode(true);
	}]);