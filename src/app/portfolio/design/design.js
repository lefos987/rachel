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
			{name: 'Thompson Reuters', url: '/design/thompson-reuters', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Burberry', url: '/design/burberry', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'RMG', url: '/design/rmg', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Thompson Reuters', url: '/design/thompson-reuters', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Burberry', url: '/design/burberry', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'RMG', url: '/design/rmg', img: 'assets/img/type/pf_img_square_agency_1.jpg'}
		];
	}]);