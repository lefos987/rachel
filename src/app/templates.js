angular.module('templates', ['app/app.view.html', 'app/contact/contact.view.html', 'app/hero/hero.view.html', 'app/info/info.view.html', 'app/navigation/navigation.view.html', 'app/portfolio/concepts/concept-details.view.html', 'app/portfolio/concepts/concepts.view.html', 'app/portfolio/grid.view.html', 'app/portfolio/portfolio.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'');
}]);

angular.module('app/contact/contact.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/contact/contact.view.html',
		'<div class="contact section row">\n' +
		'	<h4 class="section-header">Get in touch</h4>\n' +
		'	<p class="contact-text large-6 medium-6 small-12 columns">\n' +
		'		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, eaque, eveniet impedit cumque odio eos delectus iusto iure architecto aliquid libero aliquam sequi quia nam magnam animi distinctio ad neque.\n' +
		'	</p>\n' +
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
		'<div class="information section row" ng-controller="InfoCtrl">\n' +
		'	<div class="why-me large-7 columns">\n' +
		'		<h4 class="section-header">Why me?</h4>\n' +
		'		<p>\n' +
		'			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, pariatur, dolorum, iure blanditiis dolores laborum esse eum sit nesciunt beatae voluptas inventore laboriosam magni iste porro asperiores temporibus. Quae, unde!\n' +
		'		</p>\n' +
		'		<h5>Let me help</h5>\n' +
		'		<p>\n' +
		'			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, veritatis, sapiente ipsum voluptatum velit nobis a corporis voluptatibus veniam facilis aliquid dicta qui quod dolorem est reiciendis explicabo. Recusandae, quis.\n' +
		'			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore velit beatae quas tempora explicabo praesentium? Vel, doloremque aspernatur hic ut inventore eligendi! Eaque, voluptates itaque ipsa amet ipsum doloribus.\n' +
		'			elit.\n' +
		'		</p>\n' +
		'		<img class="rachel" src="/assets/img/img_me.png" alt="">\n' +
		'		<p>\n' +
		'			Voluptatum inventore velit beatae quas tempora explicabo praesentium? Vel, doloremque aspernatur hic ut inventore eligendi! Eaque, voluptates itaque ipsa amet ipsum doloribus.\n' +
		'			elit. Voluptatum inventore velit beatae quas tempora explicabo praesentium? Vel, doloremque aspernatur hic ut inventore eligendi! Eaque, voluptates itaque ipsa amet ipsum doloribus.\n' +
		'			elit. Voluptatum inventore velit beatae quas tempora explicabo praesentium? Vel, doloremque aspernatur hic ut inventore eligendi! Eaque, voluptates itaque ipsa amet ipsum doloribus.\n' +
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
		'<ul class="topbar-nav inline-list right hide-for-small-only">\n' +
		'	<li class="topbar-nav-item" ng-repeat="navItem in navItems">\n' +
		'		<a href="{{navItem.url}}" scroll-to="{{navItem.name}}">{{navItem.name}}</a>\n' +
		'	</li>\n' +
		'</ul>');
}]);

angular.module('app/portfolio/concepts/concept-details.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/portfolio/concepts/concept-details.view.html',
		'<div class="portfolio-details small-12 medium-10 large-10columns">\n' +
		'	<div class="client-details right">\n' +
		'		<div class="row">\n' +
		'			<h4 class="section-header client-details-header small-8 medium-10 columns">{{title}}</h4>\n' +
		'			<a href="" class="small-1 columns end right" ng-class="{btnToggleUp: show, btnToggleDown: !show}" ng-click="toggle()"></a>	\n' +
		'		</div>\n' +
		'		\n' +
		'		<div class="client-details-text" ng-if="show">\n' +
		'			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, sunt, tempore, voluptate ad quasi molestias sint iure inventore nostrum minus repellendus temporibus nisi eius quia omnis labore voluptatibus harum vel.</p>\n' +
		'		</div>	\n' +
		'	</div>\n' +
		'	<div class="portfolio-details-hero"></div>\n' +
		'</div>');
}]);

angular.module('app/portfolio/concepts/concepts.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/portfolio/concepts/concepts.view.html',
		'<grid items="concepts"></grid>');
}]);

angular.module('app/portfolio/grid.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/portfolio/grid.view.html',
		'<div class="section row">\n' +
		'	<ul class="portfolio-grid small-12 small-block-grid-1 medium-block-grid-2 large-block-grid-3">\n' +
		'		<li class="portfolio-grid-item" ng-repeat="item in items">\n' +
		'			<a class="portfolio-grid-item-header" href="{{item.url}}">\n' +
		'				{{item.name}}\n' +
		'			</a>\n' +
		'		</li>\n' +
		'	</ul>\n' +
		'</div>');
}]);

angular.module('app/portfolio/portfolio.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/portfolio/portfolio.view.html',
		'<grid items="menus"></grid>');
}]);
