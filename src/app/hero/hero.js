'use strict';

/**
 * @ngdoc function
 * @name ng.module:hero
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('hero', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:heroCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('HeroCtrl', ['$scope', function ($scope) {
		$scope.msg = 'This is the HeroCtrl controller';
	}])

	/**
	 * @ngdoc function
	 * @name ng.directive:hero
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @example
	   <doc:example>
	     <doc:source>
	       <hero></hero>
	     </doc:source>
	   </doc:example>
	 */
	.directive('hero', function () {
		return {
			templateUrl: 'app/hero/hero.view.html',
			restrict: 'E'
		};
	});