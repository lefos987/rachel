'use strict';

/**
 * @ngdoc function
 * @name ng.module:conceptdetails
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('agency-details', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:conceptdetailsCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('AgencyDetailsCtrl', ['$scope', 'titleFactory', 'itemDetailsFactory',
		function ($scope, titleFactory, itemDetailsFactory) {

		$scope.showControls = true;
		var agencies = [
			{
				title: 'rmg',
				description: 'RMG Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
					'Nemo, maxime alias libero deserunt harum quos totam voluptatum error placeat numquam' +
					'voluptates reiciendis itaque corporis velit cupiditate nobis praesentium est sint.',
				img: 'assets/img/pf_img_intro_concept_1.jpg'
			},
			{
				title: 'thompson reuters',
				description: 'Thompson reuters Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
					'Nemo, maxime alias libero deserunt harum quos totam voluptatum error placeat numquam' +
					'voluptates reiciendis itaque corporis velit cupiditate nobis praesentium est sint.',
				img: 'assets/img/pf_img_intro_concept_1.jpg'
			},
			{
				title: 'lloyds',
				description: 'Lloyds Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
					'Nemo, maxime alias libero deserunt harum quos totam voluptatum error placeat numquam' +
					'voluptates reiciendis itaque corporis velit cupiditate nobis praesentium est sint.',
				img: 'assets/img/pf_img_intro_concept_1.jpg'
			}
		];
		var title = titleFactory('agencyId');
		var itemDetails = itemDetailsFactory(agencies, title);


		$scope.item = {
			title: title,
			text: itemDetails.description,
			img: itemDetails.img
		};
	}]);