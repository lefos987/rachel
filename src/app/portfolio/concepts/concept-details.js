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
angular.module('concept-details', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:conceptdetailsCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('ConceptDetailsCtrl', ['$scope', 'titleFactory',
		function ($scope, titleFactory) {

		$scope.showControls = true;
		var title = titleFactory('conceptId');
		$scope.item = {
			title: title,
			text: 'Niki!'
		};
	}]);