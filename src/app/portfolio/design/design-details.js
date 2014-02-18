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
angular.module('design-details', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:designDetailsCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('DesignDetailsCtrl', ['$scope', 'titleFactory',
		function ($scope, titleFactory) {

		$scope.showControls = true;
		var title = titleFactory('designId');
		$scope.item = {
			title: title,
			text: 'Niki!'
		};
	}]);