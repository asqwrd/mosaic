define(["ember"], function(Ember){
	var long_short_data = [ 
			  {
				name: 'Ali Chambers',
				pic: "img/ali.jpg",
				bioPic: "background:url(img/Chambers_22.jpg);",
				bio:  "Ali was born and raised in Memphis to an African-American father and an Iranian mother. He is married to Anetta and they have three exuberant boys: Nathanael, Samuel, and Benjamin. Anetta is originally from Poland and came to the states for college where the two met and married in 2003. Together they are passionate about Jesus, their boys, traveling, diversity, music and sushi. Ali is on a journey to plant a Christian church in one of the most diverse and divided cities in America!Diversity is not only a part of Ali's heart and life experiences, but it is also in his blood. Through difficult, challenging and painful experiences of living in a racially divided city, Ali always found himself searching for his identity with a people he could build a community with. Through the grace of God he found that in Christ.The gospel teaches us that God is destroying the dividing wall of hostility between God and man, as well as man and man. Ali has learned through the scripture that diversity is not just a fad. Maya Angelou once said, “that in diversity there is beauty and there is strength.” Ali's passion is to see people, who are far from God, brought near to God through the cross of Jesus. This passion extends out to all; rich and poor, black and white, Asian and Middle Eastern. The one unifying factor is that we are all broken and there is only one savior, Jesus, who can make a change.",
				role: "Lead Church Planter"
				
			  },
			  {
				name: 'Trevor Dodson',
				pic: "img/trevor_thumb.jpg",
				bioPic: "background:url(img/trevor.jpg);",
				bio:  "Trevor is originally from Arkansas. After moving to Memphis in 2013, he soon fell in love with its atmosphere, opportunity, and diversity. The Lord began to use the city as a platform for his love for Jesus and for those seeking answers and truth. This love for the city and for the lost culminates in the ministry of Mosaic Church. Trevor has served in multiple roles throughout the church body namely, teaching, small group leadership, and inner city outreach. He and his beautiful wife Laney love building relationships with their community and being involved deeply with other’s lives. Trevor and Laney see each relationship within the city as a window of opportunity to make disciples for Jesus. They are expecting their first child (boy) very soon but for the time being, have a DOGter named “Princess Khloe Sinclaire Dodson,” that somehow ends up in almost every picture they take. Together, Trevor and Laney enjoy worshiping King Jesus, eating healthy, listening to music, watching movies, and being different.",
				role: "Church Planter"
				
			  },
			  {
				name: 'Weston Perry',
				pic: "img/weston.jpg",
				bioPic: "background:url(img/westonBig.jpg);",
				bio:  "Weston is a Tennessee-native, born and raised in Chattanooga. After graduating from Tennessee Tech, he moved to Nashville where he lived with his wife, Daley, until moving to Memphis in May of 2013. Weston and Daley both immediately felt at home in Memphis and are proud to be part of such a diverse and unique city. As worship leader at Mosaic church, Weston's goal is to create an environment of worship in which people from all walks of life can participate and experience God's presence. Weston has been playing music from an early age- having been taught by his grandfather Wayne - who he still 'jams' with whenever they get together. Weston plays the guitar, banjo, mandolin, and harmonica.Weston enjoys playing soccer (and is mildly obsessed with Liverpool Football Club), hiking, rock-climbing, bike-riding, (basically anything outdoors), and hanging out with Daley and their three year old adopted dog, Birdie. Weston works at Outdoors Inc. and coaches JV men's soccer at Evangelical Christian School.",
				role: "Church Planter"
			  },
			  {
				name: 'Brad Wyatt',
				pic: "img/Brad.jpg",
				bioPic: "background:url(img/bradbig.jpg);",
				bio:  "Brad moved to Memphis in May of 1979 to begin a career in Federal Law Enforcement as a Treasury Agent.  He retired from that position in February, 2007 and moved to Nashville to head up the Security Department at Lipscomb University and Campus School.  Brad married Janice in May of 1984 and they have four kids, a grown son and two grown daughters and a 15 year old, Robby, who was their first foster child through Agape.  They were blessed to adopt Robby in 2002. They became grandparents twice in 2013, both precious little girls. Brad’s relationship with the Lord became real in 1991 and since that time he has invested himself in developing meaningful relationships with others.  Brad loves small group ministry and the atmosphere and intimacy that setting lends itself too.  Brad has served as an elder, house church leader and teacher. The Wyatt’s and Perry’s moved to Memphis last summer to pursue God’s call on their lives to help plant a multicultural church in the North Memphis area.  God quickly united them with the Chambers and Dodson families and has united their similar passions to pursue what God is doing together through Mosaic. Memphis is a great city and a perfect fit for a Christ-centered community across diverse lines. The Wyatt’s look forward with great anticipation to joining God in His redemptive work in Memphis!  Relationship with God and sharing Jesus with people is the passion of the Wyatt’s!",
				role: "Church Planter"
			  }
			];


	var LeadershipController = Ember.ArrayController.extend({
		leaders: long_short_data,
  });
	
	return LeadershipController;
});

