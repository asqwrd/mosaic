define([
	"ember",
	"text!templates/leadershipTemplate.html","classie","grid3d"
], function(Ember, leadershipTemplate,classie) {

	var LeadershipView = Ember.View.extend({
		tagName:"section",
		classNames:["grid3d", "vertical"],
		elementId:"leaders",
		defaultTemplate: Ember.Handlebars.compile(leadershipTemplate),

		didInsertElement: function(){
			
			setTimeout(function(){
				jQuery('.loadingRoute').fadeOut();
				new grid3D( document.getElementById( 'leaders' ));
			},800);
			
		}
		
	});
	
	return LeadershipView;
});