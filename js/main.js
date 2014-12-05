(function(root){
	require(["config"], function(config){
		requirejs.config(config);
		require(["App","ember","classie","swiper","parse"],function(App, Ember,classie){
			var app_name = config.app_name || "App";
			root[app_name] = App = Ember.Application.create(App);
			
			//$(document).foundation();
			App.Router.map(function() {
			  this.resource('home');
			  this.resource('event');
			  this.resource('leadership');
			  this.resource('vision');
			  this.resource('about');
			  this.resource('location');
			  this.resource('donate');
			  this.resource('sermon');
			  this.resource('connect');
			});
			var attr = Ember.attr;
	
			 App.Home = Ember.Model.extend({
			  caption: attr(),
			  slideNum: attr(),
			  fblink: attr(),
			  logo: attr(),
			  morelink: attr(),
			  coverImage: attr(),
			  headline: attr(),
			  video: attr(),
			  playerThumb:attr(),
			  link:attr(),
		
			  createdAt: attr(Date),
			  updatedAt: attr(Date)
		});
		App.HomeController = Ember.ArrayController.extend({
			  sortProperties: ['slideNum'],
			  sortAscending: true
		});
		
			App.Home.reopenClass({
			  primaryKey: 'objectId',
			  adapter: Ember.ParseAdapter.create(),
			  sortProperties: ['slideNum'],
			  sortAscending: false
			});
			
			Ember.Handlebars.registerHelper('ifCond', function(value,options) {
			  if(value=="") {
				return options.inverse(this);
			  }
				return options.fn(this);
			});
			
			Ember.Handlebars.helper('iframe', function(value, options) {
				  var escaped = Handlebars.Utils.escapeExpression(value);
				  text = "";
				  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

					for( var i=0; i < 5; i++ ) {
					  text += possible.charAt(Math.floor(Math.random() * possible.length));
					}
					if(value!="")
					return new Handlebars.SafeString('<div class="video"><div class="border"></div><iframe id="'+text+'" src="'+value+'?api=1&player_id='+text+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'); 

			});
			Ember.Handlebars.helper('div', function(value, options) {
				  var escaped = Handlebars.Utils.escapeExpression(value);
					if(value!="")
					return new Handlebars.SafeString('<div id = "'+text+'2" class="mask '+text+'""><div class="thumb '+text+'" style="background:url('+value+');"><span class="play"></span></div></div>'); 

			});
      Ember.Handlebars.helper('logo', function(value, options) {
				  //var escaped = Handlebars.Utils.escapeExpression(value);
					if(value==true)
            return new Handlebars.SafeString('<figure class = "swipeLogo"></figure>'); 

			});
			Ember.Handlebars.helper('facebook', function(value, options) {
				  var escaped = Handlebars.Utils.escapeExpression(value);
					if(value!="")
					return new Handlebars.SafeString('<a style="color:#d04345" target=_blank href="'+value+'">Facebook Page</a>'); 

			});
			Ember.Handlebars.helper('more', function(value, options) {
				  var escaped = Handlebars.Utils.escapeExpression(value);
					if(value!="")
						return new Handlebars.SafeString('<a style="color:#d04345" target=_blank href="'+value+'">Click Here</a>'); 

			});

			App.HomeRoute = Ember.Route.extend({
			  model: function() {
				return App.Home.find();
			  }
			});
			
			App.IndexRoute = Ember.Route.extend({
			  redirect: function() {
				this.transitionTo('home');
			  }
			});

		
		});
	});
})(this);