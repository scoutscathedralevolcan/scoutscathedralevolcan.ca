$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
        loadMoreContent();
    }
});

function loadMoreContent() {
    // there should be a button, which leads to next posts
    var next = $("a.next").first();
    var paginationnav = $("div.paginationnav").first();
    next.each(function(key, value) {
        var url = $(value).attr('href');
        // remove paginationnav, so we can't load multiple times
        next.remove();
        // adding a temp. dom object to load the next page
        var list = $("<div></div>");
        // call load method and get the div.post-list node
        list.load(url + " div.actu-post-list", function(response, status, xhr) {
            // check if we doesn't get any error
            if ( status != "error" ) {
                // copy all childrens of our temp container to the real container
                // note: jQuery load will copy the div.post-list node as well,
                // so use the childrens and move them
	        var $postlist = $('div.actu-post-list').first();
                list.children("div.actu-post-list").children().each(
                    function(key, value){
			$postlist.append(value)
                        $postlist.isotope( 'appended', value);
			$postlist.isotope('layout')
                    }
                );
            }
        });
	paginationnav.load(url + " div.paginationnav");
    });
    
}

$(window).ready(function() {
    masonry_actu();
    var paginationnav = $("div.paginationnav").first();
    paginationnav.hide();
});	
	
function masonry_actu()
{
  $(function(){   
      var $postlist = $('div.actu-post-list').first();
      if ( $postlist.length > 0 ) {
	// set masonry layout
	$postlist.isotope({
		masonry: { columnWidth: $postlist.find('.actu-post')[0] },
		itemSelector: '.actu-post'
	});
	$postlist.isotope('layout');
      }
    });
}
