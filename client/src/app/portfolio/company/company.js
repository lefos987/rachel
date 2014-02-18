'use strict';

/**
 * @ngdoc function
 * @name ng.module:clients
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('company', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:agencyCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('CompanyCtrl', ['$scope', 'titleFactory', 'itemDetailsFactory', 'companyFactory',
		function ($scope, titleFactory, itemDetailsFactory, companyFactory) {

		$scope.showControls = true;
		var title = titleFactory('companyId');
		var itemDetails = itemDetailsFactory(companyFactory, title);

		$scope.item = {
			title: itemDetails.title,
			text: itemDetails.text,
			img: itemDetails.img,
			roles: itemDetails.roles
		};
	}])
	/**
	 * @ngdoc function
	 * @name ng.factory:companyFactory
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @returns {string} A new instance of this factory.
	 *
	 */
	.factory('companyFactory', [function () {
		
		return [
			{
				id: 'barclays',
				title: 'Barclays',
				text: 'Creating a content audit of Barclays retail and using this information to ' +
							'conceptualise a new digital design. This progressed to working closely with ' +
							'Content team and creating user journeys and new site architecture for a ' +
							'responsive multi-channel and personalised site.',
				roles: [
					'UX lead',
					'Strategy',
					'Requirements',
					'User journeys',
					'Concept design',
					'Prototypes',
					'Architecture',
					'Pattern libraries',
					'Board level presentation'
				],
				img: [
					'assets/img/company/pf_img_square_barclays.jpg',
					'assets/img/company/pf_img_square_barclays.jpg',
					'assets/img/company/pf_img_square_barclays.jpg',
					'assets/img/company/pf_img_square_barclays.jpg'
				],
			},
			{
				id: 'bskyb',
				title: 'BSkyB',
				text: '/company/bskyb',
				img: [
					'assets/img/type/pf_img_square_bskyb.jpg',
					'assets/img/type/pf_img_square_bskyb.jpg',
					'assets/img/type/pf_img_square_bskyb.jpg',
					'assets/img/type/pf_img_square_bskyb.jpg'
				]
			},
			{
				id: 'bt',
				title: 'BT Global Services',
				text: 'Web re-design for BT Global Services. It delivers a combination of communications ' +
							'and IT services to organisations and governments worldwide.',
				roles: [
					'Design lead',
					'Concept visuals',
					'Prototypes',
					'User testing'
				],
				img: [
					'assets/img/type/pf_img_square_bt.jpg',
					'assets/img/type/pf_img_square_bt.jpg',
					'assets/img/type/pf_img_square_bt.jpg',
					'assets/img/type/pf_img_square_bt.jpg'
				]
			},
			{
				id: 'capgemini',
				title: 'Capgemini',
				text: 'I managed a UX team of nine in a newly set up digital division of this large ' +
							'global tech consultancy with private and public sector clients. Hands on work ' +
							'in Innovation to develop and enhance products from a UX perspective and ' +
							'organising their delivery.',
				roles: [
					'UX lead',
					'Requirements',
					'Proof of concepts',
					'Prototypes',
					'Architecture',
					'User journeys',
					'Strategy',
					'Manage team',
					'Resourcing'
				],
				img: [
					'assets/img/type/pf_img_square_cap.jpg',
					'assets/img/type/pf_img_square_cap.jpg',
					'assets/img/type/pf_img_square_cap.jpg',
					'assets/img/type/pf_img_square_cap.jpg'
				]
			},
			{
				id: 'capitol',
				title: 'Capital One',
				text: 'Concept UX Visual Design for a marketing campaign release of new range of credit ' +
							'cards.',
				roles: [
					'Design lead',
					'Concept visuals',
					'Scamps',
					'Prototypes'
				],
				img: [
					'assets/img/type/pf_img_square_capitol.jpg',
					'assets/img/type/pf_img_square_capitol.jpg',
					'assets/img/type/pf_img_square_capitol.jpg',
					'assets/img/type/pf_img_square_capitol.jpg'
				]
			},
			{
				id: 'edsa',
				title: 'EDSA',
				text: '/company/edsa',
				img: [
					'assets/img/type/pf_img_square_edsa.jpg',
					'assets/img/type/pf_img_square_edsa.jpg',
					'assets/img/type/pf_img_square_edsa.jpg',
					'assets/img/type/pf_img_square_edsa.jpg'
				]
			},
			{
				id: 'hatchett',
				title: 'Hatchett',
				text: '/company/hatchett',
				img: [
					'assets/img/type/pf_img_square_hatchett.jpg',
					'assets/img/type/pf_img_square_hatchett.jpg',
					'assets/img/type/pf_img_square_hatchett.jpg',
					'assets/img/type/pf_img_square_hatchett.jpg'
				]
			},
			{
				id: 'lloyds',
				title: 'Lloyds TSB',
				text: 'Complete re-design for Lloyds TSB, one of the big four retail banks in the ' +
							'United Kingdom. Update designs to promote Lloyds TSB\'s status as National Partner ' +
							'of the London 2012 Olympics and Paralympics Games.',
				roles: [
					'Senior design',
					'Concept visuals',
					'Scamps',
					'Prototypes'
				],
				img: [
					'assets/img/type/pf_img_square_lloyds.jpg',
					'assets/img/type/pf_img_square_lloyds.jpg',
					'assets/img/type/pf_img_square_lloyds.jpg',
					'assets/img/type/pf_img_square_lloyds.jpg'
				]
			},
			{
				id: 'ngrid',
				title: 'NgGrid',
				text: '/company/nggrid',
				img: [
					'assets/img/type/pf_img_square_nggrid.jpg',
					'assets/img/type/pf_img_square_nggrid.jpg',
					'assets/img/type/pf_img_square_nggrid.jpg',
					'assets/img/type/pf_img_square_nggrid.jpg'
				]
			},
			{
				id: 'tr',
				title: 'Thomson Reuters IP & Science',
				text: 'Thomson Reuters Cortellis is an advanced source for Life Sciences information. ' +
							'From drug discovery data, patent reports, global regulatory documentation, ' +
							'submission guides, pipeline analysis, developing a comprehensive competitive ' +
							'intelligence study to regulatory strategy.',
				roles: [
					'Design lead',
					'Concept visuals',
					'Prototypes',
					'User testing'
				],
				img: [
					'assets/img/type/pf_img_square_tr.jpg',
					'assets/img/type/pf_img_square_tr.jpg',
					'assets/img/type/pf_img_square_tr.jpg',
					'assets/img/type/pf_img_square_tr.jpg'
				]
			},
			{
				id: 'tui',
				title: 'TUI UK & Ireland',
				text: 'Complete re-structure for this Top 10 UK retailer meant creating two completely ' +
							'new sites for its\' travel companies, Thomson and First Choice.',
				roles: [
					'Design lead',
					'Concept visuals & IA',
					'Prototypes',
					'User testing'
				],
				img: [
					'assets/img/type/pf_img_square_tui.jpg',
					'assets/img/type/pf_img_square_tui.jpg',
					'assets/img/type/pf_img_square_tui.jpg',
					'assets/img/type/pf_img_square_tui.jpg'
				]
			},
			{
				id: 'virgin',
				title: 'Virgin',
				text: '/company/virgin',
				img: [
					'assets/img/type/pf_img_square_virgin.jpg',
					'assets/img/type/pf_img_square_virgin.jpg',
					'assets/img/type/pf_img_square_virgin.jpg',
					'assets/img/type/pf_img_square_virgin.jpg'
				]
			}
		];
		
	}]);