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
angular.module('user-journeys', ['user-journey-details'])

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
		$scope.items = [
			{name: 'Thompson Reuters', url: '/user-journeys/thompson-reuters', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Lloyds', url: '/user-journeys/lloyds', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'RMG', url: '/user-journeys/rmg', img: 'assets/img/type/pf_img_square_agency_1.jpg'}
		];
	}]);