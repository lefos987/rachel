'use strict';

/**
 * @ngdoc function
 * @name ng.module:design
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('design', ['design-details'])

	/**
	 * @ngdoc function
	 * @name ng.controller:designCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('DesignCtrl', ['$scope', function ($scope) {
		$scope.showControls = true;
		$scope.items = [
			{name: 'Thompson Reuters', url: '/design/thompson-reuters'},
			{name: 'Burberry', url: '/design/burberry'},
			{name: 'RMG', url: '/design/rmg'},
			{name: 'Thompson Reuters', url: '/design/thompson-reuters'},
			{name: 'Burberry', url: '/design/burberry'},
			{name: 'RMG', url: '/design/rmg'}
		];
	}]);