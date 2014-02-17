'use strict';

/**
 * @ngdoc function
 * @name ng.module:clientsDetails
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('clients-details', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:ClientsDetailsCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('ClientsDetailsCtrl', ['$scope', 'titleFactory',
		function ($scope, titleFactory) {

		$scope.showControls = true;
		var title = titleFactory('clientId');
		$scope.item = {
			title: title,
			text: 'Niki! client'
		};
	}]);