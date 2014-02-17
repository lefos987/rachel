'use strict';

/**
 * @ngdoc function
 * @name ng.module:user-journeys
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('user-journeys', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:user-journeysCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('UserJourneysCtrl', ['$scope', function ($scope) {
		$scope.showControls = true;
		$scope.userJourneys = [
			{name: 'Thompson Reuters', url: '/user-journeys/thompson-reuters'},
			{name: 'Burberry', url: '/user-journeys/burberry'},
			{name: 'RMG', url: '/user-journeys/rmg'},
			{name: 'Thompson Reuters', url: '/user-journeys/thompson-reuters'},
			{name: 'Burberry', url: '/user-journeys/burberry'},
			{name: 'RMG', url: '/user-journeys/rmg'}
		];
	}]);