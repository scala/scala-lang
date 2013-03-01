/* 
Plugin: jQuery Parallax
Version 1.0
Author: territory3
Author URL: http://territory3.com
Plugin URL: http://territory3.com/blog/jquery-parallax-plugin-demo

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function($) {
$.fn.parallax = function(options) {
	//defaults
	var defaults = {
		elements: false,
	}
	var options = $.extend(defaults, options);
        
	return this.each(function() {
		//return false if no elements were passed
		if(options.elements == false){ return false; }
		// Disable on mobile devices (the scroll is very jumpy on mobile devices)
		var $userAgent = navigator.userAgent;
		var android = $userAgent.match(/Android/i);
		var ipad = $userAgent.match(/iPad/i);
		var iphone = $userAgent.match(/iPhone/i);
		var blackberry = $userAgent.match(/Blackberry/i);
		var webos = $userAgent.match(/webOS/i);
		if(android || ipad || iphone || blackberry || webos) { return false; }
		
		//set up some initial variables
		var $window = $(window);
		var $window_height = $window.height();
		var $viewport = $(this);
		var $viewport_offset = $viewport.offset();
		var $viewport_height = $viewport.height();
		
		//set some basic css properties for the viewport
		$viewport.css({'position':'relative','overflow':'hidden'});
		
		//if window gets resized update the window height var
		$window.resize(function() {
			$window_height = $window.height();
			var $pos = $window.scrollTop();
			position_elements($pos);
		});
		
		//position elements initially (useful if someone reloads the page)
		position_elements($window);
		$window.bind('scroll', function() {
			var $pos = $window.scrollTop();
			position_elements($pos);
		});
		
		function position_elements($pos) {
			var $el_top = 0;
			//if the viewport is not in view, we do not need to run the parallax
			if($window_height+$pos < $viewport_offset.top) {
				return false;
			}
			//loop through each of the elements and apply the parallax effect with options
			for($i in options.elements) {
				var $obj = options.elements[$i];
				if($obj.multiplier == null) {
					$obj.multiplier = .5;
				}
				var $el = $($obj.el);
				var $css_top = parseInt($el.css('top'));
				if($obj.top == null) {
					$obj.top = $css_top;
				}
				var $el_top = 0;
				if($viewport_offset.top > $window_height) {
					$el_top = Math.round((($pos+$window_height-$viewport_offset.top)*$obj.multiplier)+$obj.top);
				} else {
					$el_top = Math.round(($pos*$obj.multiplier)+$obj.top);
				}
				//stop scrolling if the object is out of sight	
				if($el_top > $viewport_height) {
					$el_top = $viewport_height;
				}
				if($obj.boundaries != null) {
					//bottom
					if($obj.boundaries.bottom != null && $el_top >= $obj.boundaries.bottom) {
						$el_top = $obj.boundaries.bottom;
					}
					//top
					if($obj.boundaries.top != null && $el_top >= $obj.boundaries.top) {
						$el_top = $obj.boundaries.top;
					}
				}
				
				$el.css('top',$el_top);
			};
		}
	});
}

})( jQuery );