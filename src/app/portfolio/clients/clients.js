'use strict';

/**
 * @ngdoc function
 * @name ng.module:clients
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('clients', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:clientsCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('ClientsCtrl', ['$scope', function ($scope) {
		$scope.showControls = true;
		$scope.clients = [
			{name: 'Thompson Reuters', url: '/clients/thompson-reuters'},
			{name: 'Burberry', url: '/clients/burberry'},
			{name: 'RMG', url: '/clients/rmg'},
			{name: 'Thompson Reuters', url: '/clients/thompson-reuters'},
			{name: 'Burberry', url: '/clients/burberry'},
			{name: 'RMG', url: '/clients/rmg'}
		];
	}]);