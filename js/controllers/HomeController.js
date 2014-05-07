require(
    ['views/HomeView'], function(view){
        var HomeController =  Ember.ArrayController.extend({
			caption: null,
			coverImage: null,
			headline: null,
			video: null,
			playerThumb:null
        });
        return HomeController;
    });