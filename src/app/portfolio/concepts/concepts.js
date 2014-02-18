'use strict';

/**
 * @ngdoc function
 * @name ng.module:concepts
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('concepts', ['concept-details'])

	/**
	 * @ngdoc function
	 * @name ng.controller:conceptsCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('ConceptsCtrl', ['$scope', function ($scope) {
		$scope.showControls = true;
		$scope.items = [
			{name: 'Thompson Reuters', url: '/concepts/thompson-reuters', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Burberry', url: '/concepts/burberry', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'RMG', url: '/concepts/rmg', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Thompson Reuters', url: '/concepts/thompson-reuters', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'Burberry', url: '/concepts/burberry', img: 'assets/img/type/pf_img_square_agency_1.jpg'},
			{name: 'RMG', url: '/concepts/rmg', img: 'assets/img/type/pf_img_square_agency_1.jpg'}
		];
	}]);