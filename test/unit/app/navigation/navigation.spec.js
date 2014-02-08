// 'use strict';
// /*jshint camelcase: false */

// describe('navigation module', function () {

// 	describe('navigationCtrl controller', function () {

// 		var scope, NavigationCtrl;
		
// 		beforeEach(module('navigation'));
// 		beforeEach(inject(function ($rootScope, $controller) {
// 			scope = $rootScope.$new();
// 			NavigationCtrl = $controller('NavigationCtrl', {
// 				$scope: scope
// 			});
// 		}));
		
// 		it('should have the msg correctly defined in the scope', function () {
// 			scope.$root.$digest();
// 			expect(scope.msg).toEqual('This is the NavigationCtrl controller');
// 		});

// 	});

// 	describe('navigationFactory factory', function () {

// 		var navigationFactory;

// 		beforeEach(module('navigation'));
// 		beforeEach(inject(function (_navigationFactory_) {
// 			navigationFactory = _navigationFactory_;
// 		}));

// 		it('- should return the meaning of life', function () {
// 			expect(navigationFactory.someMethod()).toEqual(42);
// 		});

// 	});
// });