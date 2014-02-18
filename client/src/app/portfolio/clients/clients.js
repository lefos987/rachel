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
angular.module('clients', ['clients-details'])

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
		$scope.items = [
			{name: 'Thompson Reuters', url: '/clients/thompson-reuters', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Burberry', url: '/clients/burberry', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'RMG', url: '/clients/rmg', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Thompson Reuters', url: '/clients/thompson-reuters', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Burberry', url: '/clients/burberry', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'RMG', url: '/clients/rmg', img: 'assets/img/type/pf_img_square_agency_1.jpg'}
		];
	}]);