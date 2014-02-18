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
	.controller('HeroCtrl', ['$scope', 'heroFactory', function ($scope, heroFactory) {
		$scope.messages = [
			'promote your business',
			'communicate a message',
			'sell your products online',
			'engage your audience',
			'inform your customers',
			'look good',
			'are value for money',
			'generate new leads'
		];
	}])

	/**
	 * @ngdoc function
	 * @name ng.factory:heroFactory
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @returns {string} A new instance of this factory.
	 *
	 */
	.factory('heroFactory', ['$timeout', function ($timeout) {

		return function (arr, interval) {
			var next,

			rotator = {
				index: 0,
				currentMsg: null,
				items: arr
			};

			var updateMsg = function () {
				rotator.index = (rotator.index === rotator.items.length) ? 0 : rotator.index;
				rotator.currentMsg = rotator.items[rotator.index++];
				next = $timeout(updateMsg, interval);
			};
			updateMsg();

			return rotator;
		};
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
	.directive('hero', ['heroFactory', function (heroFactory) {
		return {
			templateUrl: 'app/hero/hero.view.html',
			restrict: 'E',
			controller: 'HeroCtrl',
			scope: {
				messages: '='
			},
			link: function (scope) {
				var rotator = heroFactory(scope.messages, 10000);
				scope.$watch(function () { return rotator.currentMsg; }, function (msg) {
					scope.message = msg;
				});
			}
		};
	}]);

	