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
angular.module('concept-details', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:conceptdetailsCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('ConceptDetailsCtrl', ['$scope', 'titleFactory', 'itemDetailsFactory',
		function ($scope, titleFactory, itemDetailsFactory) {

		$scope.showControls = true;
		var concepts = [
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
		var title = titleFactory('conceptId');
		var itemDetails = itemDetailsFactory(concepts, title);


		$scope.item = {
			title: title,
			text: itemDetails.description,
			img: itemDetails.img
		};
	}]);