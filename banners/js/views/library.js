var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    initialize: function() {
        this.collection = new app.Library();
		this.collection.fetch({reset:true});
       // this.render();
		this.listenTo( this.collection, 'add', this.renderBook );
		this.listenTo( this.collection, 'reset', this.render );
    },
	events:{
    'click #add':'addBook'
},

vimeo: function(videoId,callBack){
	$.getJSON('http://www.vimeo.com/api/v2/video/' + videoId + '.json?callback=?', {format: "json"}, function(data) {
			
			videoThumb = data[0].thumbnail_large;
			callBack(videoThumb);
		});



},

addBook: function( e ) {
    e.preventDefault();

    var formData = {};

    $( '#addBook div' ).children().each( function( i, el ) {
       
            formData[ el.id ] = $( el ).val();
      
    });
	console.log(formData);
	var player = formData['video'].replace(/(?:https:\/\/)?(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g, 'youtube').replace(/(?:https:\/\/)?(?:http:\/\/)?(?:www\.)?(?:vimeo\.com)\/(.+)/g, 'vimeo');
	
	var videoId	= formData['video'].replace(/(?:https:\/\/)?(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g, '$1').replace(/(?:https:\/\/)?(?:http:\/\/)?(?:www\.)?(?:vimeo\.com)\/(.+)/g, '$1')
	videoThumb = "";
	playerThumb = "";
	self=this;
	if(player=="youtube"){
		videoThumb="http://img.youtube.com/vi/"+videoId+"/hqdefault.jpg";
		self.collection.create({ 
			coverImage: 	"background:url("+formData["coverImage"]+");",
			video:   		formData['video'].replace(/(?:https:\/\/)?(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g, '//www.youtube.com/embed/$1').replace(/(?:https:\/\/)?(?:http:\/\/)?(?:www\.)?(?:vimeo\.com)\/(.+)/g, 'http://player.vimeo.com/video/$1'),
			playerThumb:	videoThumb,
			headline:   	formData['headline'],
			link:   		formData['link'],
			caption:   		formData['caption'], 
		});
	}
	else if(player == "vimeo"){
		this.vimeo(videoId,function(videoThumb){
			
			self.collection.create({ 
				coverImage: 	"background:url("+formData["coverImage"]+");",
				video:   		formData['video'].replace(/(?:https:\/\/)?(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g, '//www.youtube.com/embed/$1').replace(/(?:https:\/\/)?(?:http:\/\/)?(?:www\.)?(?:vimeo\.com)\/(.+)/g, 'http://player.vimeo.com/video/$1'),
				playerThumb:	videoThumb,
				headline:   	formData['headline'],
				link:   		formData['link'],
				caption:   		formData['caption'], 			
			});
		});
		
	}
	else{
			self.collection.create({ 
				coverImage: 	"background:url("+formData["coverImage"]+");",
				video:   		formData['video'].replace(/(?:https:\/\/)?(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g, '//www.youtube.com/embed/$1').replace(/(?:https:\/\/)?(?:http:\/\/)?(?:www\.)?(?:vimeo\.com)\/(.+)/g, 'http://player.vimeo.com/video/$1'),
				playerThumb:	"",
				headline:   	formData['headline'],
				link:   		formData['link'],
				caption:   		formData['caption'], 			
			});

	}
	
    
},

    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
        var bookView = new app.BookView({
            model: item
        });
		
        $('#items').append( bookView.render().el );
    }
});