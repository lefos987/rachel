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
angular.module('portfolio', ['concepts', 'concept-details', 'wireframes', 'user-journeys', 'design',
	'clients', 'agency'])

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
				{name: 'Wireframes', url: '/wireframes', img: '/assets/img/type/pf_img_square_wireframe_1.jpg'},
				{name: 'User Journeys', url: '/user-journeys', img: '/assets/img/type/pf_img_square_userjourney_1.jpg'},
				{name: 'Concepts', url: '/concepts', img: '/assets/img/type/pf_img_square_concept_1.jpg'},
				{name: 'Design', url: '/design', img: '/assets/img/type/pf_img_square_design_1.jpg'},
				{name: 'Client Side', url: '/clients', img: '/assets/img/type/pf_img_square_client_1.jpg'},
				{name: 'Agency', url: '/agency', img: '/assets/img/type/pf_img_square_agency_1.jpg'}
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