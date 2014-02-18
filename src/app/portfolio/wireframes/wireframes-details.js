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
angular.module('wireframes-details', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:conceptdetailsCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('WireframesDetailsCtrl', ['$scope', 'titleFactory',
		function ($scope, titleFactory) {

		$scope.showControls = true;
		var title = titleFactory('wireframeId');
		/*
		TODO: create a text details factory to find proper text based on id
		*/
		$scope.item = {
			title: title,
			text: 'Niki user journey!'
		};
	}]);