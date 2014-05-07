define([
	"ember",
	"text!templates/sermonTemplate.html","classie","grid3d"
], function(Ember, sermonTemplate,classie) {

	var SermonView = Ember.View.extend({
		tagName:"section",
		classNames:["grid3d", "vertical"],
		elementId:"sermons",
		defaultTemplate: Ember.Handlebars.compile(sermonTemplate),

		didInsertElement: function(){
			
			setTimeout(function(){
				jQuery('.loadingRoute').fadeOut();
				new grid3D( document.getElementById( 'sermons' ));
			},800);
			
		}
		
	});
	
	return SermonView;
});