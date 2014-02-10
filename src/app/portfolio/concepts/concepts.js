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
angular.module('concepts', [])

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
		$scope.concepts = [
			{name: 'Thompson Reuters', url: '/concepts/thompson-reuters'},
			{name: 'Burberry', url: '/concepts/burberry'},
			{name: 'RMG', url: '/concepts/rmg'},
			{name: 'Thompson Reuters', url: '/concepts/thompson-reuters'},
			{name: 'Burberry', url: '/concepts/burberry'},
			{name: 'RMG', url: '/concepts/rmg'}
		];
	}]);