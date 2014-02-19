'use strict';

angular.module('orbit', ['ngTouch'])
	.controller('OrbitCtrl', ['$scope', '$timeout', '$rootScope',
		function ($scope, $timeout, $rootScope) {

		$scope.currentIndex = 0;
		var currentTimeout;

		$scope.next = function () {
			$scope.currentIndex = ($scope.currentIndex + 1 === $scope.items.length) ? 0 : ++$scope.currentIndex;
			restartTimer();
		};
		$scope.prev = function () {
			$scope.currentIndex = ($scope.currentIndex - 1 < 0) ? ($scope.items.length - 1) : --$scope.currentIndex;
			restartTimer();
		};
		$scope.$watch('currentIndex', function (index) {
			$scope.currentItem = $scope.items[index];
		});

		$scope.isActive = function (item) {
			return item === $scope.currentItem;
		};

		$scope.select = function (item) {
			$scope.currentItem = item;
		};

		var restartTimer = function () {
			if (currentTimeout) {
				$timeout.cancel(currentTimeout);
			}
			var interval = +$scope.interval;
			if (!isNaN(interval) && interval >= 0) {
				currentTimeout = $timeout(function () {
					$scope.next();
					restartTimer();
				}, interval);
			}
		};

		$rootScope.$on('prev', function () {
			$scope.prev();
		});

		$rootScope.$on('next', function () {
			$scope.next();
		});

		$scope.$watch('interval', restartTimer);

	}])
	.directive('orbit', [function () {
		return {
			restrict: 'E',
			templateUrl: 'app/common/orbit.view.html',
			scope: {
				current: '&',
				items: '=',
				interval: '='
			},
			controller: 'OrbitCtrl'
		};
	}]);