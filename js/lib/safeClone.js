jQuery.fn.extend({
			  safeClone: function() {
				var clone;
				clone = jQuery(this).clone();
				console.log(jQuery(this).children('iframe'));
				clone.find('script[id^=metamorph]').remove();
				clone.find('*').each(function() {
				  var $this;
				  $this = jQuery(this);
				  return jQuery.each($this[0].attributes, function(index, attr) {
					if (!(attr && (attr.name.indexOf('data-bindattr') || attr.name.indexOf('data-ember')))) {
					  return;
					}
					return $this.removeAttr(attr.name);
				  });
				});
				for(var i =0; i<jQuery(this).children('iframe').length;i++){
					clone.children('iframe')[i].src = jQuery(this).children('iframe')[i].src;
					clone.children('iframe')[i].height = jQuery(this).children('iframe')[i].height;
				}
				if (clone.attr('id') && clone.attr('id').indexOf('ember') !== -1) {
				  clone.removeAttr('id');
				}
				clone.find('[id^=ember]').removeAttr('id');
				
				console.log(clone.children('iframe'));
				return clone;
			  }
			});