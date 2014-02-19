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
					{
						value: 'assets/img/large/pf_img_barclays_1.jpg',
						caption: 'Barclays One'
					},
					{
						value: 'assets/img/large/pf_img_barclays_2.jpg',
						caption: 'Barclays Two'
					},
					{
						value: 'assets/img/large/pf_img_barclays_3.jpg',
						caption: 'Barclays Three'
					},
					{
						value: 'assets/img/large/pf_img_barclays_4.jpg',
						caption: 'Barclays Four'
					},
					{
						value: 'assets/img/large/pf_img_barclays_5.jpg',
						caption: 'Barclays Five'
					},
					{
						value: 'assets/img/large/pf_img_barclays_7.jpg',
						caption: 'Barclays Seven'
					},
					{
						value: 'assets/img/large/pf_img_barclays_8.jpg',
						caption: 'Barclays Eight'
					},
					{
						value: 'assets/img/large/pf_img_barclays_9.jpg',
						caption: 'Barclays Nine'
					}
				],
			},
			{
				id: 'bskyb',
				title: 'Sky Entertainment',
				text: 'Primarily working on a re-design, for all devices, for Sky Movies, in ' +
							'collaboration with Method agency. Included regular updates for all Sky ' +
							'Entertainment sites (Sky One, Sky Movies, Sky Atlantic and Living).',
				roles: [
					'Design lead',
					'Research',
					'Concept visuals',
					'Prototypes',
					'Agile'
				],
				img: [
					{
						value: 'assets/img/large/pf_img_bskyb_1.jpg',
						caption: 'BSkyB One'
					},
					{
						value: 'assets/img/large/pf_img_bskyb_2.jpg',
						caption: 'BSkyB Two'
					},
					{
						value: 'assets/img/large/pf_img_bskyb_3.jpg',
						caption: 'BSkyB Three'
					},
					{
						value: 'assets/img/large/pf_img_bskyb_4.jpg',
						caption: 'BSkyB Four'
					},
					{
						value: 'assets/img/large/pf_img_bskyb_5.jpg',
						caption: 'BSkyB Five'
					},
					{
						value: 'assets/img/large/pf_img_bskyb_6.jpg',
						caption: 'BSkyB Six'
					},
					{
						value: 'assets/img/large/pf_img_bskyb_7.jpg',
						caption: 'BSkyB Seven'
					},
					{
						value: 'assets/img/large/pf_img_bskyb_8.jpg',
						caption: 'BSkyB Eight'
					},
					{
						value: 'assets/img/large/pf_img_bskyb_9.jpg',
						caption: 'BSkyB Nine'
					},
					{
						value: 'assets/img/large/pf_img_bskyb_10.jpg',
						caption: 'BSkyB Ten'
					},
					{
						value: 'assets/img/large/pf_img_bskyb_11.jpg',
						caption: 'BSkyB Eleven'
					}
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
					{
						value: 'assets/img/large/pf_img_bt_1.jpg',
						caption: 'BT Global Services One'
					},
					{
						value: 'assets/img/large/pf_img_bt_2.jpg',
						caption: 'BT Global Services Two'
					},
					{
						value: 'assets/img/large/pf_img_bt_3.jpg',
						caption: 'BT Global Services Three'
					},
					{
						value: 'assets/img/large/pf_img_bt_4.jpg',
						caption: 'BT Global Services Four'
					}
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
					{
						value: 'assets/img/large/pf_img_cap_1.jpg',
						caption: 'Capgemini One'
					},
					{
						value: 'assets/img/large/pf_img_cap_2.jpg',
						caption: 'Capgemini Two'
					},
					{
						value: 'assets/img/large/pf_img_cap_3.jpg',
						caption: 'Capgemini Three'
					},
					{
						value: 'assets/img/large/pf_img_cap_4.jpg',
						caption: 'Capgemini Four'
					},
					{
						value: 'assets/img/large/pf_img_cap_5.jpg',
						caption: 'Capgemini Five'
					},
					{
						value: 'assets/img/large/pf_img_cap_6.jpg',
						caption: 'Capgemini Six'
					},
					{
						value: 'assets/img/large/pf_img_cap_7.jpg',
						caption: 'Capgemini Seven'
					}
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
					{
						value: 'assets/img/company/pf_img_square_capitol.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_capitol.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_capitol.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_capitol.jpg',
						caption: 'Caption One'
					}
				]
			},
			{
				id: 'edsa',
				title: 'EDSA',
				text: '/company/edsa',
				img: [
					{
						value: 'assets/img/company/pf_img_square_edsa.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_edsa.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_edsa.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_edsa.jpg',
						caption: 'Caption One'
					}
				]
			},
			{
				id: 'hatchett',
				title: 'Hatchett',
				text: '/company/hatchett',
				img: [
					{
						value: 'assets/img/company/pf_img_square_hatchett.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_hatchett.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_hatchett.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_hatchett.jpg',
						caption: 'Caption One'
					}
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
					{
						value: 'assets/img/company/pf_img_square_lloyds.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_lloyds.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_lloyds.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_lloyds.jpg',
						caption: 'Caption One'
					}
				]
			},
			{
				id: 'ngrid',
				title: 'ngrid',
				text: 'Creating an intranet for all staff of the energy supplier\'s to contain information, ' +
							'training, personnel, etc.',
				roles: [
					'Design',
					'IA & User Journey Flows',
					'User Testing',
					'Style Guide'
				],
				img: [
					{
						value: 'assets/img/company/pf_img_square_nggrid.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_nggrid.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_nggrid.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_nggrid.jpg',
						caption: 'Caption One'
					}
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
					{
						value: 'assets/img/company/pf_img_square_tr.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_tr.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_tr.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_tr.jpg',
						caption: 'Caption One'
					}
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
					{
						value: 'assets/img/company/pf_img_square_tui.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_tui.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_tui.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_tui.jpg',
						caption: 'Caption One'
					}
				]
			},
			{
				id: 'virgin',
				title: 'Virgin Media',
				text: 'Took on a lead role re-designing VIrgin Media\'s movies, music and TV channels. ' +
							'It includes an on-demand viewing and download service, as well as news, reviews, ' +
							'features, quizzes, galleries, shopping and search.',
				roles: [
					'Design'
				],
				img: [
					{
						value: 'assets/img/company/pf_img_square_virgin.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_virgin.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_virgin.jpg',
						caption: 'Caption One'
					},
					{
						value: 'assets/img/company/pf_img_square_virgin.jpg',
						caption: 'Caption One'
					}
				]
			}
		];
		
	}]);