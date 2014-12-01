define([
	"ember",
	"text!templates/eventTemplate.html","easyXDM"
], function(Ember, eventTemplate) {

	var EventView = Ember.View.extend({
		elementId:"events",
		classNames:["fluid_container"],
		defaultTemplate: Ember.Handlebars.compile(eventTemplate),

		didInsertElement: function(){
			
			setTimeout(function(){
				jQuery('.loadingRoute').fadeOut();
			},3500);

			/*var frame = function(c,b,a){function d(h){var e=document.getElementById("upto-calendar-container-"+c),f=document.createElement("SCRIPT"),g="js/lib/embed.js";f.onreadystatechange=function(){if(f.readyState==="loaded"||f.readyState==="complete"){f.onreadystatechange=null;h()}};f.onload=function(){h()};f.setAttribute("src",g);e.parentNode.insertBefore(f,e)}d(function(){upto.init(c,b,a)})}("xbnKKO",["6SUO"],{"template":"3"});
			
			console.log(frame);*/
			/*
			!function(c,b,a){function d(h){var e=document.getElementById("upto-calendar-container-"+c),f=document.createElement("SCRIPT"),g="http://upto.com/embed/js/embed.js";f.onreadystatechange=function(){if(f.readyState==="loaded"||f.readyState==="complete"){f.onreadystatechange=null;h()}};f.onload=function(){h()};f.setAttribute("src",g);e.parentNode.insertBefore(f,e)}d(function(){upto.init(c,b,a)})}("xbnKKO",["ALUO"],{"template":"4"});
			//console.log(this.get('controller.model'));*/
			
			/*!function(c,b,a){function d(h){var e=document.getElementById("upto-calendar-container-"+c),f=document.createElement("SCRIPT"),g="http://upto.com/js/embed.js";f.onreadystatechange=function(){if(f.readyState==="loaded"||f.readyState==="complete"){f.onreadystatechange=null;h()}};f.onload=function(){h()};f.setAttribute("src",g);e.parentNode.insertBefore(f,e)}d(function(){upto.init(c,b,a)})}("xbnKKO",["6SUO"],{"template":"2"});
			
*//*
!function(c,b,a){function d(h){var e=document.getElementById("upto-calendar-container-"+c),f=document.createElement("SCRIPT"),g="js/lib/embed.js";f.onreadystatechange=function(){if(f.readyState==="loaded"||f.readyState==="complete"){f.onreadystatechange=null;h()}};f.onload=function(){h()};f.setAttribute("src",g);e.parentNode.insertBefore(f,e)}d(function(){upto.init(c,b,a)})}("xbnKKO",["6SUO"],{"template":"3"});
/*window.onresize=function(j){
	j=jQuery(document).height();
	console.log(j);
	document.getElementsByTagName("iframe")[0].style.height=j+"px";
http://upto.com/intermediary?url=http://upto.com/embed/embedded/source/xbnKKO&t=6SUO&template=3&eo=http://mosaicmemphis.com/&xdm_e=http%3A%2F%2Fmosaicmemphis.com&xdm_c=default658&xdm_p=1#/event/
}; */

		var transport = new easyXDM.Socket({
				swf:"http://upto.com/clientside-vendors/easyxdm/easyxdm.swf",
				remote:"http://upto.com/intermediary?url=http://upto.com/embedded/plugin/bBKO&eo=http://mosaicmemphis.com/&xdm_e=http%3A%2F%2Fmosaicmemphis.com&xdm_c=default6484&xdm_p=1#/event",
				container:document.getElementById("upto-calendar-container-bBKO"),
				onMessage:function(j,k){
					console.log(this);
					this.container.getElementsByTagName("iframe")[0].style.height=j+"px";
				},
				props:{
					style:{width:"100%",position:"relative",top:"0",left:"0",overflow:"hidden"},
					height:"100%"
				},
				
			});
			
			

			
		},

		
	});
	
	return EventView;
});

