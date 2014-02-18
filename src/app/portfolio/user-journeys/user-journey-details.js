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
angular.module('user-journey-details', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:conceptdetailsCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('UserJourneysDetailsCtrl', ['$scope', 'titleFactory', 'descriptionFactory',
		function ($scope, titleFactory, descriptionFactory) {

		$scope.showControls = true;
		var title = titleFactory('userJourneyId');
		var text = descriptionFactory('userJourneyId');
		/*
		TODO: create a text details factory to find proper text based on id
		*/
		$scope.item = {
			title: title,
			text: 'Niki user journey!'
		};
	}]);