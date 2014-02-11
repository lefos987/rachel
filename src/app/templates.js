angular.module('templates', ['app/app.view.html', 'app/hero/hero.view.html', 'app/info/info.view.html', 'app/navigation/navigation.view.html', 'app/portfolio/concepts/concept-details.view.html', 'app/portfolio/concepts/concepts.view.html', 'app/portfolio/portfolio.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'');
}]);

angular.module('app/hero/hero.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/hero/hero.view.html',
		'<section id="home" class="hero">\n' +
		'	<h4 class="hero-text">I design user experiences that <span class="hero-text--dynamic">promote your business</span></h4>\n' +
		'	<ul class="hero-controls inline-list">\n' +
		'		<li class="hero-controls-item"><</li>\n' +
		'		<li class="hero-controls-item">></li>\n' +
		'	</ul>\n' +
		'</section>');
}]);

angular.module('app/info/info.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/info/info.view.html',
		'<div id="information" class="information row" ng-controller="InfoCtrl">\n' +
		'	<div class="why-me large-7 columns">\n' +
		'		<h4 class="why-me-header">Why me?</h4>\n' +
		'		<p>\n' +
		'			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, pariatur, dolorum, iure blanditiis dolores laborum esse eum sit nesciunt beatae voluptas inventore laboriosam magni iste porro asperiores temporibus. Quae, unde!\n' +
		'		</p>\n' +
		'		<h5>Let me help</h5>\n' +
		'		<p>\n' +
		'			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, veritatis, sapiente ipsum voluptatum velit nobis a corporis voluptatibus veniam facilis aliquid dicta qui quod dolorem est reiciendis explicabo. Recusandae, quis.\n' +
		'		</p>\n' +
		'		<div class="row">\n' +
		'			<img class="large-4 columns" src="assets/img/img_me.png" alt="">\n' +
		'			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n' +
		'		</div>\n' +
		'	</div>\n' +
		'	<div class="skills large-offset-1 large-4 columns">\n' +
		'		<h4 class="skills-header">Skills and Services</h4>\n' +
		'		<ul class="skills-list no-bullet">\n' +
		'			<li class="skills-item" ng-repeat="skill in skills">{{skill.name}}</li>\n' +
		'		</ul>\n' +
		'	</div>\n' +
		'</div>');
}]);

angular.module('app/navigation/navigation.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/navigation/navigation.view.html',
		'<ul class="topbar-nav inline-list right">\n' +
		'	<li class="topbar-nav-item" ng-repeat="navItem in navItems">\n' +
		'		<a href="{{navItem.url}}" scroll-to="{{navItem.name}}">{{navItem.name}}</a>\n' +
		'	</li>\n' +
		'</ul>');
}]);

angular.module('app/portfolio/concepts/concept-details.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/portfolio/concepts/concept-details.view.html',
		'<a href="/concepts" class="controls large-1 columns"><</a>\n' +
		'<div class="large-10 columns">\n' +
		'	<h4 class="right">{{title}}</h4>\n' +
		'	<div style="height: 400px; width: 100%; background: pink; overflow: hidden;" >a</div>\n' +
		'</div>\n' +
		'<a href="" class="controls large-1 columns">></a>');
}]);

angular.module('app/portfolio/concepts/concepts.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/portfolio/concepts/concepts.view.html',
		'<a href="/" class="controls large-1 columns"><</a>\n' +
		'<ul class="portfolio-list large-10 columns small-block-grid-3">\n' +
		'  <li class="portfolio-list-item" ng-repeat="concept in concepts">\n' +
		'  	<a class="portfolio-list-item-header" href="{{concept.url}}">\n' +
		'  		{{concept.name}}\n' +
		'  	</a>\n' +
		'  </li>\n' +
		'</ul>\n' +
		'<a href="" class="controls large-1 columns">></a>');
}]);

angular.module('app/portfolio/portfolio.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/portfolio/portfolio.view.html',
		'<ul class="portfolio-list small-block-grid-1 medium-block-grid-2 large-block-grid-3">\n' +
		'  <li class="portfolio-list-item" ng-repeat="menu in menus">\n' +
		'  	<a class="portfolio-list-item-header" href="{{menu.url}}">\n' +
		'  		{{menu.name}}\n' +
		'  	</a>\n' +
		'  </li>\n' +
		'</ul>');
}]);
