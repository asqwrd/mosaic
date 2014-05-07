define([
	"ember",
	"text!templates/aboutTemplate.html"
], function(Ember, aboutTemplate) {

	var AboutView = Ember.View.extend({
		elementId:"aboutmosaic",
		classNames:["fluid_container"],
		defaultTemplate: Ember.Handlebars.compile(aboutTemplate),

		didInsertElement: function(){
			
			setTimeout(function(){
				jQuery('.loadingRoute').fadeOut();
				/*eleitems = jQuery( ".items" ).safeClone().appendTo('#camera_wrap_3');
				jQuery('#camera_wrap_3').camera({
				height: '57%',
				pagination: false,
				thumbnails: false,
				//height:"52%",
				imagePath: 'img/'
			});
			jQuery('.cameraContent div').css("display","block");*/

				
			},1000);
			//console.log(this.get('controller.model'));
			



			
		},

		
	});
	
	return AboutView;
});

