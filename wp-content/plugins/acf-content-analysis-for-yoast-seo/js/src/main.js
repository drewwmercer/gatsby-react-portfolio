/* global jQuery, YoastSEO, YoastACFAnalysis: true */
/* exported YoastACFAnalysis */

var App = require( "./app.js" );

( function( $ ) {
	$( document ).ready( function() {
		if ( "undefined" !== typeof YoastSEO ) {
			YoastACFAnalysis = new App();
		}
	} );
}( jQuery ) );
