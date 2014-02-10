'use strict';

/**
 * @ngdoc function
 * @name ng.module:info
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('info', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:infoCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('InfoCtrl', ['$scope', 'infoFactory', function ($scope, infoFactory) {
		$scope.skills = infoFactory;
	}])

	/**
	 * @ngdoc function
	 * @name ng.factory:infoFactory
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @returns {string} A new instance of this factory.
	 *
	 */
	.factory('infoFactory', function () {
		return [
			{name: 'User experience design'},
			{name: 'Information architecture'},
			{name: 'Interaction design'},
			{name: 'Hi-fidelity prototypes'},
			{name: 'Visual design'},
			{name: 'Responsive design'},
			{name: 'Multi-channel design'},
			{name: 'User research'},
			{name: 'Usability testing'},
			{name: 'Project & team leadership'},
			{name: 'UX strategy'},
			{name: 'Client relationship management'},
			{name: 'Agile / Lean'},
			{name: 'Waterfall'},
			{name: 'B2B'},
			{name: 'E-commerce'},
			{name: 'Content management'}
		];
	})

	/**
	 * @ngdoc function
	 * @name ng.directive:info
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @example
	   <doc:example>
	     <doc:source>
	       <info></info>
	     </doc:source>
	   </doc:example>
	 */
	.directive('info', function () {
		return {
			templateUrl: 'app/info/info.view.html',
			restrict: 'E'
		};
	});