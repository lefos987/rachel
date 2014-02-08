angular.module('templates', ['app/app.view.html', 'app/navigation/navigation.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'<h1>{{message}}</h1>');
}]);

angular.module('app/navigation/navigation.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/navigation/navigation.view.html',
		'<ul class="tobar-nav large-6 columns inline-list" ng-controller="NavigationCtrl">\n' +
		'	<li class="topbar-nav-item" ng-repeat="navItem in navigation">\n' +
		'		<a href="{{navItem.url}}">{{navItem.name}}</a>\n' +
		'	</li>\n' +
		'</ul>');
}]);
