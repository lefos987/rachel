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
angular.module('agency-details', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:conceptdetailsCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('AgencyDetailsCtrl', ['$scope', 'titleFactory',
		function ($scope, titleFactory) {

		$scope.showControls = true;
		var title = titleFactory('agencyId');
		/*
		TODO: create a text details factory to find proper text based on id
		*/
		$scope.item = {
			title: title,
			text: 'Niki agency!'
		};
	}]);