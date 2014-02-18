angular.module('templates', ['app/app.view.html', 'app/contact/contact.view.html', 'app/hero/hero.view.html', 'app/info/info.view.html', 'app/navigation/navigation.view.html', 'app/portfolio/grid.view.html', 'app/portfolio/item.view.html', 'app/portfolio/list.view.html', 'app/portfolio/portfolio-details.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'');
}]);

angular.module('app/contact/contact.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/contact/contact.view.html',
		'<div class="section row">\n' +
		'	<h4 class="section-header">Get in touch</h4>\n' +
		'	<div class="contact-text large-6 medium-6 small-12 columns">\n' +
		'		<p>Please note:  I am currently not looking to take on any new work at the moment</p>\n' +
		'		<p>I’m based in London and always keen to hear about London-based contracts and opportunities.</p>\n' +
		'		<p>If you’d like to get in touch please drop me a message and I’ll get back to you very soon</p>\n' +
		'		<img src="assets/img/Img_me.png" alt="">\n' +
		'	</div>\n' +
		'	<form class="contact-form large-6 medium-6 small-12 columns">\n' +
		'		<input type="text" placeholder="Name">\n' +
		'		<input type="email" placeholder="Email">\n' +
		'		<input type="tel" placeholder="Phone">\n' +
		'		<input type="text" placeholder="Address">\n' +
		'		<textarea name="message" id="message" class="message" placeholder="Message"></textarea>\n' +
		'		<button class="btn-send">Send</button>\n' +
		'	</form>\n' +
		'</div>');
}]);

angular.module('app/hero/hero.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/hero/hero.view.html',
		'<section id="home" class="hero">\n' +
		'	<h4 class="hero-text">I design user experiences that <span class="hero-text--dynamic">{{message}}</span></h4>\n' +
		'	<ul class="hero-controls inline-list">\n' +
		'		<li class="hero-controls-item"><</li>\n' +
		'		<li class="hero-controls-item">></li>\n' +
		'	</ul>\n' +
		'</section>');
}]);

angular.module('app/info/info.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/info/info.view.html',
		'<div class="section row" ng-controller="InfoCtrl">\n' +
		'	<div class="why-me large-7 columns">\n' +
		'		<h4 class="section-header">Why me?</h4>\n' +
		'		<p>Your website should work the way your users expect it to.\n' +
		'		It should be organised in a way that makes it easier for them to find the information they need without pulling out their hair.\n' +
		'		It should speak their language.\n' +
		'		It should tell your users where they are and how to get where they’re going.</p>\n' +
		'		<h5>Let me help</h5>\n' +
		'		<p>As a user experience consultant, I will work closely with you to get an in-depth understanding of your business, your customers and what you’re trying to achieve digitally. I have 17 years experience working on digital projects for large companies. I specialise in crafting exceptional user experiences that are clear, simple, and engaging.</p>\n' +
		'		<p>Technology and digital media have become more complex and more interactive, leading to a more demanding landscape for both clients and their customers. My role is to help you by not only creating the best possible user experience but also by understanding capabilities, risks, constraints and opportunities around all aspects of your project.</p>\n' +
		'		<p>If you’d like to discuss working with me or you’d like more information please get in touch.\n' +
		'		</p>\n' +
		'	</div>\n' +
		'	<div class="skills large-offset-1 large-4 columns">\n' +
		'		<h4 class="section-header">Skills and Services</h4>\n' +
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
		'		<a href="{{navItem.url}}" class="show-for-medium-up" scroll-to="{{navItem.name}}">{{navItem.name}}</a>\n' +
		'		<a href="{{navItem.url}}" class="icn {{navItem.name | lowercase}} show-for-small-only" scroll-to="{{navItem.name}}"></a>\n' +
		'	</li>\n' +
		'</ul>');
}]);

angular.module('app/portfolio/grid.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/portfolio/grid.view.html',
		'<div class="section row">\n' +
		'	<a href="/" class="icn left-chevron controls prev hide-for-small-only" ng-if="showControls"></a>\n' +
		'	<ul class="portfolio-grid small-12 small-block-grid-1 medium-block-grid-2 large-block-grid-3">\n' +
		'		<li class="portfolio-grid-item" ng-repeat="item in items">\n' +
		'			<a class="portfolio-grid-item-link" href="{{item.url}}">\n' +
		'				<span class="portfolio-grid-item-header">{{item.name}}</span>\n' +
		'				<img src="{{item.img}}" alt="" class="portfolio-grid-item-img">\n' +
		'			</a>\n' +
		'		</li>\n' +
		'	</ul>\n' +
		'	<a href="/" class="icn right-chevron controls next hide-for-small-only" ng-if="showControls"></a>\n' +
		'</div>');
}]);

angular.module('app/portfolio/item.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/portfolio/item.view.html',
		'<portfolio-details item="item" show-controls="showControls"></portfolio-details>');
}]);

angular.module('app/portfolio/list.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/portfolio/list.view.html',
		'<grid items="items" show-controls="showControls"></grid>');
}]);

angular.module('app/portfolio/portfolio-details.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/portfolio/portfolio-details.view.html',
		'<div class="section row">\n' +
		'	<a href="/" class="icn left-chevron controls prev hide-for-small-only" ng-if="showControls"></a>\n' +
		'	<div class="portfolio-details small-12 columns">\n' +
		'		<div class="client-details right">\n' +
		'			<h4 class="section-header client-details-header">{{item.title}}</h4>\n' +
		'			<a href="" class="btn-toggle icn" ng-class="{\'up-chevron\': show, \'down-chevron\': !show}" ng-click="toggle()">\n' +
		'			</a>	\n' +
		'			<div class="client-details-text" ng-if="show">\n' +
		'				<p>{{item.text}}</p>\n' +
		'				<ul class="roles">\n' +
		'					<li ng-repeat="role in item.roles">{{role}}</li>\n' +
		'				</ul>\n' +
		'			</div>	\n' +
		'		</div>\n' +
		'		<div class="portfolio-details-hero">\n' +
		'			<img src="{{item.img}}" alt="">\n' +
		'		</div>\n' +
		'	</div>\n' +
		'	<a href="/" class="icn right-chevron controls next hide-for-small-only" ng-if="showControls"></a>\n' +
		'</div>');
}]);
