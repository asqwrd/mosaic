define(["ember","models/Home"], function(Ember,Home){
        var HomeRoute = Ember.Route.extend({
			 model: function(){
			  return Home.find();
			},
			/*setupController: function(controller, banner) {
			controller.set('model', banner.get('Banners'));
		  }*/
		  
			
        });
        return HomeRoute;
    });