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
			  coverImage: attr(),
			  headline: attr(),
			  video: attr(),
			  playerThumb:attr(),
			  createdAt: attr(Date),
			 updatedAt: attr(Date)
		});
		
			App.Home.reopenClass({
			  primaryKey: 'objectId',
			  adapter: Ember.ParseAdapter.create()
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
					return new Handlebars.SafeString('<div class="video"><div class="border"></div><iframe id="'+text+'" src="'+value+'?api=1&player_id='+text+'" width="640" height="360" frameborder="0"></iframe></div>'); 

			});
			Ember.Handlebars.helper('div', function(value, options) {
				  var escaped = Handlebars.Utils.escapeExpression(value);
					if(value!="")
					return new Handlebars.SafeString('<div class="mask"><div class="thumb '+text+'" style="background:url('+value+');"><span class="play"></span></div></div>'); 

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