'use strict';

/**
 * @ngdoc function
 * @name ng.module:wireframes
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('wireframes', ['wireframes-details'])

	/**
	 * @ngdoc function
	 * @name ng.controller:wireframesCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('WireframesCtrl', ['$scope', function ($scope) {
		$scope.showControls = true;
		$scope.items = [
			{name: 'Thompson Reuters', url: '/wireframes/thompson-reuters'},
			{name: 'Burberry', url: '/wireframes/burberry'},
			{name: 'RMG', url: '/wireframes/rmg'},
			{name: 'Thompson Reuters', url: '/wireframes/thompson-reuters'},
			{name: 'Burberry', url: '/wireframes/burberry'},
			{name: 'RMG', url: '/wireframes/rmg'}
		];
	}]);