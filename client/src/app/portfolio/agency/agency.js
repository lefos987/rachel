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
angular.module('agency', ['agency-details'])

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
		$scope.items = [
			{name: 'Thompson Reuters', url: '/agency/thompson-reuters', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Burberry', url: '/agency/burberry', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'RMG', url: '/agency/rmg', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Thompson Reuters', url: '/agency/thompson-reuters', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Burberry', url: '/agency/burberry', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'RMG', url: '/agency/rmg', img: 'assets/img/type/pf_img_square_agency_1.jpg'}
		];
	}]);