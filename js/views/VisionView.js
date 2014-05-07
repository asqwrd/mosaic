define([
	"ember",
	"text!templates/visionTemplate.html"
], function(Ember, visionTemplate) {

	var VisionView = Ember.View.extend({
		elementId:"ourvision",
		classNames:["fluid_container"],
		defaultTemplate: Ember.Handlebars.compile(visionTemplate),

		didInsertElement: function(){
			
			setTimeout(function(){
				jQuery('.loadingRoute').fadeOut();
				
			},1000);

		},

		
	});
	
	return VisionView;
});

