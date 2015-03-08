define([
    "ember",
    "text!templates/mcgTemplate.html"
], function(Ember, mcgTemplate) {

    var mcgView = Ember.View.extend({
        elementId:"mcg",
        classNames:["fluid_container"],
        defaultTemplate: Ember.Handlebars.compile(mcgTemplate),

        didInsertElement: function(){

            setTimeout(function(){
                jQuery('.loadingRoute').fadeOut();

            },1000);



        },


    });

    return mcgView;
});

