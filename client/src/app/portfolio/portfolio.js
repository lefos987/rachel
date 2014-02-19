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
angular.module('portfolio', ['company'])

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
		$scope.showControls = true;
		$scope.items = [
			{name: 'Barclays', url: '/company/barclays', img: 'assets/img/company/pf_img_square_barclays.jpg'},
			{name: 'Sky Entertainment', url: '/company/bskyb', img: 'assets/img/company/pf_img_square_bskyb.jpg'},
			{name: 'BT Global Services', url: '/company/bt', img: 'assets/img/company/pf_img_square_bt.jpg'},
			{name: 'Capgemini', url: '/company/capgemini', img: 'assets/img/company/pf_img_square_cap.jpg'},
			{name: 'Capital One', url: '/company/capitol', img: 'assets/img/company/pf_img_square_capitol.jpg'},
			{name: 'Evening Standard', url: '/company/es', img: 'assets/img/company/pf_img_square_es.jpg'},
			{name: 'European Directories', url: '/company/edsa', img: 'assets/img/company/pf_img_square_edsa.jpg'},
			//{name: 'Hatchett', url: '/company/hatchett', img: 'assets/img/company/pf_img_square_hatchett.jpg'},
			{name: 'Lloyds TSB', url: '/company/lloyds', img: 'assets/img/company/pf_img_square_lloyds.jpg'},
			{name: 'National Grid Global Intranet', url: '/company/ngrid', img: 'assets/img/company/pf_img_square_ngrid.jpg'},
			{name: 'Thomson Reuters IP & Science', url: '/company/tr', img: 'assets/img/company/pf_img_square_tr.jpg'},
			{name: 'TUI UK & Ireland', url: '/company/tui', img: 'assets/img/company/pf_img_square_tui.jpg'},
			{name: 'Virgin Media', url: '/company/virgin', img: 'assets/img/company/pf_img_square_virgin.jpg'}
		];
	}])

	/**
	 * @ngdoc function
	 * @name ng.factory:titleFactory
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @returns {string} A new instance of this factory.
	 *
	 */
	.factory('titleFactory', ['$routeParams', function ($routeParams) {
		
		return function (key) {
			var titleArr = $routeParams[key].split('-'),
					title = '';
				
			for (var i in titleArr) {
				title += titleArr[i] + ' ';
			}
			return title;
		};
		
	}])

	/**
	 * @ngdoc function
	 * @name ng.factory:itemDetailsFactory
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @returns {string} A new instance of this factory.
	 *
	 */
	.factory('itemDetailsFactory', [function () {
		
		return function (arr, title) {

			function trim(str) {
				return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
			}
			for (var i in arr) {
				var lcTitle = trim(title.toLowerCase());
				var arrTitle = trim(arr[i].id.toLowerCase());
				if (arrTitle === lcTitle) {
					return arr[i];
				}
			}
		};
		
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

		/**
	 * @ngdoc function
	 * @name ng.directive:itemDetails
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @example
	   <doc:example>
	     <doc:source>
	       <item-details></item-details>
	     </doc:source>
	   </doc:example>
	 */
	.directive('portfolioDetails', ['$rootScope', function ($rootScope) {
		return {
			templateUrl: 'app/portfolio/portfolio-details.view.html',
			restrict: 'E',
			scope: {
				item: '=',
				showControls: '='
			},
			controller: function ($scope) {
				$scope.show = true;
				$scope.toggle = function () {
					$scope.show = (($scope.show) ? false : true);
				};

				$scope.prev = function () {
					$rootScope.$emit('prev');
				};

				$scope.next = function () {
					$rootScope.$emit('next');
				};
			}
		};
	}])//mk:module
;