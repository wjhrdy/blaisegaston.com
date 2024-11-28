jQuery( function($) {
	$( '.js-ok' ).css( 'visibility', 'visible' );
} );

function gcap_v2_invisible_submit( gtoken ) {
	console.log('gcap_v2_invisible_submit', gtoken);
	$btn = jQuery( 'button.g-recaptcha' );
	if ( $btn.length ) {
		$btn[0].form.submit();
	} else console.log('nope2');
}
