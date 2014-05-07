define([
	"ember",
	"text!templates/locationTemplate.html"
], function(Ember, locationTemplate) {

	var LocationView = Ember.View.extend({
		elementId:"locations",
		classNames:["fluid_container"],
		defaultTemplate: Ember.Handlebars.compile(locationTemplate),

		didInsertElement: function(){
			
			setTimeout(function(){
				jQuery('.loadingRoute').fadeOut();
			},800);
			
		},

		
	});
	
	return LocationView;
});

