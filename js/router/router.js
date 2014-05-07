define(["ember"], function(Ember){
	var Router = Ember.Router.extend({
		root: Ember.Route.extend({
			index: Ember.Route.extend({
				route: '/mosaicpt3'
			}),
			/*event: Ember.Route.extend({
				route: '/event'
			}),
			donate: Ember.Route.extend({
				route: '/donate'
			}),
			connect: Ember.Route.extend({
				route: '/connect'
			}),
			sermon: Ember.Route.extend({
				route: '/sermon'
			}),
			location: Ember.Route.extend({
				route: '/location'
			}),
			home: Ember.Route.extend({
				route: '/home'
			}),
			leadership: Ember.Route.extend({
				route: '/leadership'
			}),
			vision: Ember.Route.extend({
				route: '/vision'
			}),
			about: Ember.Route.extend({
				route: '/about'
			}),*/
		})
	});
	
	return Router;
});
