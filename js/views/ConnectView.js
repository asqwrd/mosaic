define([
	"ember",
	"text!templates/connectTemplate.html"
], function(Ember, connectTemplate) {

	var ConnectView = Ember.View.extend({
		elementId:"connects",
		classNames:["fluid_container"],
		defaultTemplate: Ember.Handlebars.compile(connectTemplate),

		didInsertElement: function(){
			
			setTimeout(function(){
				jQuery('.loadingRoute').fadeOut();
				
			},1000);
			
	

		},

		
	});
	
	return ConnectView;
});

