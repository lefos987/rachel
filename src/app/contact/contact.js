'use strict';

/**
 * @ngdoc function
 * @name ng.module:contact
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('contact', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:contactCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('ContactCtrl', ['$scope', function ($scope) {
		$scope.msg = 'This is the ContactCtrl controller';
	}])

	/**
	 * @ngdoc function
	 * @name ng.directive:contact
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @example
	   <doc:example>
	     <doc:source>
	       <contact></contact>
	     </doc:source>
	   </doc:example>
	 */
	.directive('contact', [function () {
		return {
			templateUrl: 'app/contact/contact.view.html',
			restrict: 'E'
		};
	}]) //mk:module
;