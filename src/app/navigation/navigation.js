'use strict';

/**
 * @ngdoc function
 * @name ng.module:navigation
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('navigation', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:navigationCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('NavigationCtrl', ['$scope', 'navigationFactory',
		function ($scope, navigationFactory) {
		
		$scope.navigation = navigationFactory;
	}])

	/**
	 * @ngdoc function
	 * @name ng.factory:navigationFactory
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @returns {string} A new instance of this factory.
	 *
	 */
	.factory('navigationFactory', function () {
		return [
			{name: 'Portfolio', url: ''},
			{name: 'Information', url: ''},
			{name: 'Contact', url: ''}
		];
	});