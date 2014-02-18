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
			{name: 'Thompson Reuters', url: '/wireframes/thompson-reuters', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Burberry', url: '/wireframes/burberry', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'RMG', url: '/wireframes/rmg', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Thompson Reuters', url: '/wireframes/thompson-reuters', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Burberry', url: '/wireframes/burberry', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'RMG', url: '/wireframes/rmg', img: 'assets/img/type/pf_img_square_agency_1.jpg'}
		];
	}]);