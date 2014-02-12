'use strict';

/**
 * @ngdoc function
 * @name ng.module:portfolio
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('portfolio', ['concepts', 'concept-details'])

	/**
	 * @ngdoc function
	 * @name ng.controller:portfolioCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('PortfolioCtrl', ['$scope', function ($scope) {
		$scope.showControls = false;
		$scope.menus = [
				{name: 'Wireframes', url: '/wireframes'},
				{name: 'User Journeys', url: '/user-journeys'},
				{name: 'Concepts', url: '/concepts'},
				{name: 'Design', url: '/design'},
				{name: 'Client Side', url: '/client-side'},
				{name: 'Agency', url: '/agency'}
			];
	}])

	/**
	 * @ngdoc function
	 * @name ng.directive:grid
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @example
	   <doc:example>
	     <doc:source>
	       <grid></grid>
	     </doc:source>
	   </doc:example>
	 */
	.directive('grid', [function () {
		return {
			templateUrl: 'app/portfolio/grid.view.html',
			restrict: 'E',
			scope: {
				items: '=',
				showControls: '='
			}
		};
	}])//mk:module
;