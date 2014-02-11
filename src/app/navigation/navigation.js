'use strict';

/**
 * @ngdoc function
 * @name ng.module:navigation
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('navigation', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:navigationCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('NavigationCtrl', ['$scope', 'navigationFactory', '$location', '$anchorScroll',
		function ($scope, navigationFactory, $location, $anchorScroll) {
		
		$scope.navigation = navigationFactory;

	}])

	/**
	 * @ngdoc function
	 * @name ng.factory:navigationFactory
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @returns {string} A new instance of this factory.
	 *
	 */
	.factory('navigationFactory', function () {
		return [
			{name: 'Information', url: ''},
			{name: 'Portfolio', url: ''},
			{name: 'Contact', url: ''}
		];
	})

	/**
	 * @ngdoc function
	 * @name ng.directive:navigation
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @example
	   <doc:example>
	     <doc:source>
	       <navigation></navigation>
	     </doc:source>
	   </doc:example>
	 */
	.directive('navigation', [function () {
		return {
			templateUrl: 'app/navigation/navigation.view.html',
			restrict: 'E',
			scope: {
				navItems: '='
			}
		};
	}])
	.directive('scrollTo', ['$location', '$anchorScroll', function ($location, $anchorScroll) {
		return {
			restrict: 'A',
			link: function (scope, elem, attrs) {
				elem.on('click', function () {
					var hash = attrs.scrollTo.toLowerCase();
					$location.hash(hash);
					$anchorScroll();
				});
			}
		};
	}]);