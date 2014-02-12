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

		var titleArr = $routeParams.conceptId.split('-'),
				title = '';
				
		for (var i in titleArr) {
			title += titleArr[i] + ' ';
		}
		$scope.title = title;
		$scope.show = true;
		$scope.toggle = function () {
			$scope.show = (($scope.show) ? false : true);
		};
	}]);