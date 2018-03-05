(function( $ ){

	// fullscreen gallery
	var $fullscreen_gallery = $( "#fullscreen-gallery" );
	if ( $fullscreen_gallery.length > 0 ) {

		if ( $fullscreen_gallery.find('.gallery-item').length > 1 ) { // if there are more than 1 image
			
			if ( !$fullscreen_gallery.hasClass('kenburns-gallery') ) {	// do not initialize if kenburns
				jQuery('#footer').prepend('<nav id="gallerynav"><a href="#" class="thumbs">	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">	<rect width="5" height="5" x="0"   y="0" /><rect width="5" height="5" x="8" y="0" /><rect width="5" height="5" x="0" y="8" /><rect width="5" height="5" x="8" y="8" /></svg></a><a href="#" class="prev">&lt;</a> <a href="#" class="pause">&#9614;&#9614;</a> <a href="#" class="next">&gt;</a></nav>');

				$fullscreen_gallery.before('<ul id="gallerythumbs">').cycle({
					slideExpr: '.gallery-item',
					fx:        'fade', 
		   			speed:     1000, 
					timeout:   5000,
					pager:   	 '#gallerythumbs', 
					slideResize: true,
					containerResize: true,
					width: '100%',
					height: '100%',
					fit: 1,
					cleartypeNoBg : true,
					pagerAnchorBuilder: function(idx, slide) { 
					   return '<li><a href="#"><img src="' + jQuery(slide).find('img').attr('src') + '" alt="" /></a></li>'; 
					},
					prev:    '#gallerynav .prev',
			  		next:    '#gallerynav .next'
				});
				var paused = false;
				jQuery('#gallerynav .pause').on('click', function() { 
					if ( !paused ) {
						$fullscreen_gallery.cycle('pause');
						paused = true;
					} 
					else {
						$fullscreen_gallery.cycle('resume'); 
						paused = false;
					}
					jQuery(this).toggleClass('active');
				});
				// show/hide thumbs
				var revealed = false;
				jQuery('#gallerynav a.thumbs').on('click', function() { 	// if clicked on svg button
					// show thumbs wrapper
					jQuery('#gallerythumbs').toggleClass('reveal');
					// show thumbs
					if (!revealed) {
						jQuery('body').addClass('gallerythumbsrevealed');
						revealed = true;
					}
					// hide thumbs
					else {
						jQuery('body').removeClass('gallerythumbsrevealed');
						revealed = false;
					}
					// pause cycling
					$fullscreen_gallery.cycle('pause');
					paused = true;
				});
				jQuery('#gallerythumbs').on('click', function() { // if clicked on a thumb (large image will be automatically shown) or somewhere else
					// hide thumbs wrapper
					jQuery('#gallerythumbs').toggleClass('reveal'); 
					jQuery('body').removeClass('gallerythumbsrevealed');
					// resume cycling
					$fullscreen_gallery.cycle('resume'); 
					paused = false;
					revealed = false;
				});
				// scroll gallery thumbs with mousewheel
				jQuery('#gallerythumbs').on('mousewheel', function(event) {
				    if (event.deltaY < 0) { // scroll right
						jQuery('#gallerythumbs').stop().animate({scrollLeft: '+=180px' }, 300); 
				    }
				    else {
						jQuery('#gallerythumbs').stop().animate({scrollLeft: '-=180px' }, 300); 
				    }
				});
			}
		}
	}
	
	
	/* ********* WINDOW LOAD ********** */
	jQuery(window).load(function() {
	
		// load screen
		jQuery('.loadreveal').addClass('reveal');
		jQuery('#loadscreen').stop().animate( { opacity: 0 }, 200, function() {
			jQuery('body.home').removeClass('loading');
			jQuery(this).hide();
		});
	
	
		// masonry gallery
		var $masonry_gallery = jQuery('.masonry-gallery.gallery');
		if ( $masonry_gallery.length > 0 ) {

			$masonry_gallery.each( function(index, element) {
				var $masonry_items = $(element).find('.gallery-item');
			
				// set masonry layout
				$(element).isotope({
					masonry: { columnWidth: $(element).find('.gallery-item')[0] },
					itemSelector: '.gallery-item'
				});
				$(element).isotope('layout');
					
				// filtering
				jQuery('#gallery-filter li a').on('click', function(){
					jQuery('#gallery-filter li a').removeClass('active');
					jQuery(this).addClass('active');
					var selector = jQuery(this).attr('data-filter');
					$masonry_gallery.isotope({ filter: selector });
					return false;
				});

				// changing layout
				jQuery('#grid-changer li a').on('click', function(){
					jQuery('#grid-changer li a').removeClass('active');
					jQuery(this).toggleClass('active');

					$masonry_items.removeClass('col-3');
					$masonry_items.removeClass('col-4');
					$masonry_items.removeClass('col-5');
					$masonry_items.toggleClass(jQuery(this).closest('li').attr('class'));
					$masonry_gallery.isotope('layout');
				});
			
			});
		}

		
		// before-after
		var $before_after = jQuery('.before-after.gallery');
		if ( $before_after.length > 0 ) {
			$before_after.imageReveal({
				barWidth: 4,
				touchBarWidth: 50,
				startPosition: 0.5,
				width: jQuery('.before-after img').width(),
				height:  jQuery('.before-after img').height()
			});
		}
	});

    
    $(document).ready(function($) {
    $('a.popup').magnificPopup({
         type: 'image',
          gallery:{
         enabled:true,
         navigateByImgClick: true,
         preload: [0,1] // Will preload 0 - before current, and 1 after the current image
       },
        image: {
        titleSrc: function(item) {
              return item.el.attr('title');
            }
        }
          // other options
      });
    });

} )( jQuery );


