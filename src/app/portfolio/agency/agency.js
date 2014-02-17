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
angular.module('agency', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:agencyCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('AgencyCtrl', ['$scope', function ($scope) {
		$scope.showControls = true;
		$scope.agency = [
			{name: 'Thompson Reuters', url: '/agency/thompson-reuters'},
			{name: 'Burberry', url: '/agency/burberry'},
			{name: 'RMG', url: '/agency/rmg'},
			{name: 'Thompson Reuters', url: '/agency/thompson-reuters'},
			{name: 'Burberry', url: '/agency/burberry'},
			{name: 'RMG', url: '/agency/rmg'}
		];
	}]);