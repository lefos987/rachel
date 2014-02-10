'use strict';

/**
 * @ngdoc function
 * @name ng.module:conceptdetails
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('concept-details', ['ngRoute'])

	/**
	 * @ngdoc function
	 * @name ng.controller:conceptdetailsCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('ConceptDetailsCtrl', ['$scope', '$routeParams',
		function ($scope, $routeParams) {

		$scope.title = $routeParams.conceptId;
		$scope.msg = 'This is the ConceptdetailsCtrl controller';
	}]);