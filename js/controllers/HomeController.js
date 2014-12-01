require(
    ['views/HomeView'], function(view){
        var HomeController =  Ember.ArrayController.extend({
			caption: null,
			slideNum:null,
			coverImage: null,
			headline: null,
			video: null,
			playerThumb:null,
			link:null,
        });
        return HomeController;
    });