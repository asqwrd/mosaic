define(
    ['views/HomeView',"parse"],
    function (view) {
		var attr = Ember.attr;
        var Home = Ember.Model.extend({
			  caption: attr(),
			  coverImage: attr(),
			  headline: attr(),
			  video: attr(),
			  playerThumb:attr(),
			  createdAt: attr(Date),
			 updatedAt: attr(Date)
		});

        return Home;
    });