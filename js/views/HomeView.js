define([
	"ember",
	"text!templates/homeTemplate.html","jquery","froogaloop"
], function(Ember, homeTemplate,$) {

	var HomeView = Ember.View.extend({
		elementId:"feature",
		classNames:["fluid_container"],
		defaultTemplate: Ember.Handlebars.compile(homeTemplate),
		
		onMessageReceived: function(e){
			var data = JSON.parse(e.data);
			$this=self;
				switch (data.event) {
					case 'ready':
						$this.onReady();
						break;
					   
					case 'playProgress':
						$this.onPlayProgress(data.data);
						break;
						
					case 'pause':
						$this.onPause();
						break;
					   
					case 'finish':
						$this.onFinish();
						break;
				}
		
		
		
		},
		post: function(action, value) {
			var data = { method: action };
			
			if (value) {
				data.value = value;
			}
			
			f.contentWindow.postMessage(JSON.stringify(data), url);
			
		},
		onReady: function() {
			status.text('ready');
			console.log('ready');
			this.post('addEventListener', 'pause');
			this.post('addEventListener', 'finish');
			this.post('addEventListener', 'playProgress');
		},

		onPause: function() {
			//status.text('paused');
			jQuery('.thumb').fadeIn();
			mySwiper.startAutoplay();
		},

		onFinish: function() {
			//status.text('finished');
			$('.thumb').fadeIn();
			mySwiper.startAutoplay();
		},

		onPlayProgress: function(data) {
			status.text(data.seconds + 's played');
		},
		
		
		didInsertElement: function(){
			self=this;
			// Listen for messages from the player
			setTimeout(function(){
				$('#loading').hide();
				//eleitems = $( ".items" ).safeClone().appendTo('#camera_wrap_3');
				 mySwiper = new Swiper('.swiper-container',{
					pagination: '.pagination',
					loop:false,
					autoplayDisableOnInteraction: true,
					autoplay: 3000, 
					paginationClickable: true
				  });
				  $('.arrow-left').on('click', function(e){
					e.preventDefault()
					mySwiper.swipePrev()
				  });
				  $('.arrow-right').on('click', function(e){
					e.preventDefault()
					mySwiper.swipeNext()
				  });
				  f = jQuery('iframe');
				  $('.thumb').click(function(e) { 
					var className = $(this).attr('class').split(" ")[1];
					//console.log(className);
					e.preventDefault();
					 f = jQuery('#'+className)[0];
					 url = f.getAttribute('src').split('?')[0];
					status = $('.status');
					self.post('addEventListener', 'pause');
					self.post('addEventListener', 'finish');
					//return false; 
				});
				  
				  //f = jQuery('iframe')[1];
				  
				  
				  if (window.addEventListener){
						window.addEventListener('message', self.onMessageReceived, false);
				 }
				 else {
						window.attachEvent('onmessage', self.onMessageReceived, false);
				 }
				 
			 $('.thumb').on('click', function(e) {
				e.preventDefault();
					mySwiper.stopAutoplay();
					var className = $(this).attr('class').split(" ")[1];
					$('.'+className).fadeOut();
					 self.post("play");
					 
					 
				 });
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				 // some code..
					mySwiper.stopAutoplay();
				}
						
				  
				
			},3000);
			
			   
				 
			//$('.swiper-container').hover(function(){mySwiper.stopAutoplay()},function(){mySwiper.startAutoplay()});
			
			
			

			

			
		},

		
	});
	
	return HomeView;
});

