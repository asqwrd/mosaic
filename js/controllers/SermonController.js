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
				
			  },
			  {
				name: 'Acts: The Church that changed the world',
				pic: "img/acts.jpg",
				video: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/43614727%3Fsecret_token%3Ds-16xoL&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
				caption:  "T.F. Hodge said, “Hating skin color is contempt for God's divine creative imagination. Honoring it is appreciation for conscious, beautiful-love-inspired diversity.” The Bible says, 'There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.' (Galatians 3:28)  Looking at Acts 16, we examine the life, background and conversion of three very different people, and how these three who are worlds apart converge at the cross of Jesus.",
				
			  },
        {
          name: 'Something is happening in Memphis',
          pic: "img/something.jpg",
          video: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/53383455&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
          caption:  "Revelation tells the story of God remaking the world through fire and destruction.  Although there is a lot of pain, death, destruction, war and hell, the focus of it all is the renewal and rebirth that will soon take place.  God is making all things new.  God is up to something in our world.  Something is happening in Memphis, something is happening in our world.  Gods work in people through His church is the beginning of God making all things new."
				
			  },
        {
          name: 'Advent: The Word became Flesh',
          pic: "img/advent.jpg",
          video: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/62731816&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
          caption:  "Advent is the celebration of the coming of Jesus. In the coming of Jesus, God actually becomes flesh and lives among us. In that, Jesus was able to identify with us and then, ultimately save us."
				
			  },
        {
          name: 'Nehemiah: Building a Foundation that leaves a Legacy',
          pic: "img/nehemiah.jpg",
          video: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/71894448&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
          caption:  "Nehemiah is about God rebuilding the city of Jerusalem after the destruction of the nation because of their rebellion against God.  It's about the rebuilding of the wall which enables the city to thrive for the future good of God’s people and their continued survival.  It's a rebuilding process that leaves a legacy for the future, a legacy that will pave the way for the coming of Jesus."
				
			  },
        {
            name: 'Anomaly',
            pic: "img/anomaly.jpg",
            video: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/104551357&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
            caption: "The definition of anomaly is, \"something that deviates from what is standard, normal or expected.\" Christians are anomalies. In this series we will see the kingdom of Christ in contrast to the kingdom of Man. We’ll look at what makes Christians this contrast community by focusing on topics that are pressing and important for all of us. Non-Christians will see how we are different and why. Christians will be confronted with areas of life they must repent of and apply the gospel to as they grow in Christlikeness. The gospel changes us, and in the process we become Anomalies."

        },
        {
          name: 'Stand alone Sermons',
          pic: "img/7H.jpg",
          video: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/61951762&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
          caption:  "These are stand alone sermons."
				
			  }
			];

	var LeadershipController = Ember.ArrayController.extend({
		sermons: long_short_data,
  });
	
	return LeadershipController;
});

