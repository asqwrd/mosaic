define(["ember"], function(Ember){
	var long_short_data = [ 
			  {
				name: 'God > than Your Fear',
				pic: "img/godfear.jpg",
				video: "//player.vimeo.com/video/79262850?title=0&amp;byline=0",
				caption:  "In this message we talk about how Christians struggle with fear. We will discuss how God can oversome our fears",
				
			  },
			  {
				name: 'The Gospel & Your City',
				pic: "img/sermon1.jpg",
				video: "//player.vimeo.com/video/78467409?title=0&amp;byline=0",
				caption:  "In the city you have the collision of the beauty and brokenness of humanity.  No where is this seen more clearly than in the collision of cultures.  Some want separation, others opt for syncretism, but in Christianity through the gospel, God creates a mosaic.  Through the gospel, we are given a new identity as a child of God where diversity becomes family.  We explore this in Galatians 3:23-29",
				
			  },
			  {
				name: 'The Gospel & Your Emotions',
				pic: "img/sermon2.jpg",
				video: "//player.vimeo.com/video/78442648?title=0&amp;byline=0",
				caption:  "What is envy? Envy is about worship, worship of self, not God.  In this message we talk about the root of envy, what it does to community, and that in the gospel of Christ God sets us free from envy.",
				
			  },
			  {
				name: 'The Story Continues',
				pic: "img/sermon3.jpg",
				video: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146656123&amp;auto_play=false&amp;hide_related=false&amp;visual=true",
				caption:  "T.F. Hodge said, “Hating skin color is contempt for God's divine creative imagination. Honoring it is appreciation for conscious, beautiful-love-inspired diversity.” The Bible says, 'There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.' (Galatians 3:28)  Looking at Acts 16, we examine the life, background and conversion of three very different people, and how these three who are worlds apart converge at the cross of Jesus.",
				
			  }
			];


	var LeadershipController = Ember.ArrayController.extend({
		sermons: long_short_data,
  });
	
	return LeadershipController;
});

