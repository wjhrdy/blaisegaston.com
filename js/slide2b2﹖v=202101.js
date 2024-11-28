// Based on http://jquery.malsup.com/cycle/

// Undocumented event, see jquery.cycle.custom.js, lines 104-105
var slideshow_on_paused = function( cont, opts, byHover, onPager ) {
	// console.log('paused', cont, byHover, onPager );
	// console.log('paused/hc', jQuery( '#slideshow-nav' ).hasClass( 'slideshow-nav-paused' ) );
	jQuery( '#slideshow-nav' ).addClass( 'slideshow-nav-paused' );
};


// Undocumented event, see jquery.cycle.custom.js, lines 106-107
var slideshow_on_resumed = function( cont, opts, byHover, onPager ) {
	// console.log('resumed', cont, byHover, onPager);
	// console.log('resumed/hc', jQuery( '#slideshow-nav' ).hasClass( 'slideshow-nav-paused' ) );
	jQuery( '#slideshow-nav' ).removeClass( 'slideshow-nav-paused' );
};


jQuery(document).ready(function($) {

	var $slides_container = $('#slideshow-slides');
	var $slides = $('#slideshow-slides > div');
	// console.log( 'slides', $slides.length );
	if ( $slides_container.length && $slides.length > 1 ) {

		var vstartingSlide = 0;
		var $startdiv = $('#slideshow-slides > div.slideshow-slide-first');
		if ( $startdiv.length ) {
			var startid = $startdiv.attr('id'); // slide0, slide2, etc.
			if ( startid ) {
				startid = startid.substring(5);
				if (startid > 0) {
					vstartingSlide = startid;
				}
			}
		}
		// console.log( 'vstartingSlide', vstartingSlide );

		var optc = {
			startingSlide: vstartingSlide,
			speed:       2000,
			timeout:     3600,
			pause:       1,		// pause on hover
			slideResize: 0		// for cycle.all, not needed for cycle.lite
		};

		var $nav = $( '#slideshow-nav > div > a' );
		if ( $nav.length ) {
			// console.log( 'nav', $nav.length );
			optc.pager =              '#slideshow-nav';
			optc.pauseOnPagerHover =  1;
			optc.fastOnEvent =        667;
			optc.pagerAnchorBuilder = function( idx, slide ) {
				return '#slideshow-nav > div:eq(' + idx + ') > a';
			};
			optc.paused = slideshow_on_paused;
			optc.resumed = slideshow_on_resumed;
		}

		$slides_container.cycle( optc );

		if ( $slides_container.hasClass( 'animoff' ) ) {
			// console.log('animoff', 1 );
			$slides_container.cycle( 'pause' );
		} // else console.log('animoff', 0 );

	}
});
