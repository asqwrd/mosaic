define([
	"ember",
	"text!templates/donateTemplate.html"
], function(Ember, donateTemplate) {

	var DonateView = Ember.View.extend({
		elementId:"donation",
		classNames:["fluid_container"],
		defaultTemplate: Ember.Handlebars.compile(donateTemplate),

		didInsertElement: function(){
			
			setTimeout(function(){
				jQuery('.loadingRoute').fadeOut();
				
			},1000);

		},

		
	});
	
	return DonateView;
});

