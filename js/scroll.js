// based on http://jscrollpane.kelvinluck.com/fullpage_scroll.html

$(function() {
	var win = $(window);
	// Full body scroll
	var isResizing = false;
	win.bind(
		'resize',
		function() {
			if (!isResizing) {
				isResizing = true;
				var container = $('#full-page-container');
				// Temporarily make the container tiny so it doesn't influence the
				// calculation of the size of the document
				container.css(
					{
						'width': 1,
						'height': 1
					}
				);
				// Now make it the size of the window...
				container.css(
					{
						'width': win.width(),
						'height': win.height()
					}
				);
				isResizing = false;
				container.jScrollPane(
					{
						'showArrows': true
					}
				);
			}
		}
	).trigger('resize');

	// Workaround for known Opera issue which breaks demo (see
	// http://jscrollpane.kelvinluck.com/known_issues.html#opera-scrollbar )
	$('body').css('overflow', 'hidden');

	// IE calculates the width incorrectly first time round (it
	// doesn't count the space used by the native scrollbar) so
	// we re-trigger if necessary.
	if ($('#full-page-container').width() != win.width()) {
		win.trigger('resize');
	}


	$('div.content20').jScrollPane({showArrows: true,horizontalGutter: 10});
	// $('div.content30').jScrollPane({showArrows: true,horizontalGutter: 10});
	$('div.content20wide').jScrollPane({showArrows: true,horizontalGutter: 10});
	// $('div.content30wide').jScrollPane({showArrows: true,horizontalGutter: 10});

});
