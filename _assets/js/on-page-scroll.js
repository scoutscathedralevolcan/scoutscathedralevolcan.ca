// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var headerHeight = $('header').outerHeight();
var navHeight =  $('nav').outerHeight();

$(function() {
    //caches a jQuery object containing the header element
    var menu = $(".navbar-fixed-top");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= headerHeight - navHeight) {
            menu.addClass("navbar-shrink");
        } else {
            menu.removeClass("navbar-shrink");
        }
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
