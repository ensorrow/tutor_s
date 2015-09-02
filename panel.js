$( document ).on( "swipeleft swiperight", "body", function( e ) {
	if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
		if ( e.type === "swipeleft" ) {
			$( "#right-panel" ).panel( "open" );
		} else if ( e.type === "swiperight" ) {
			$( "#left-panel" ).panel( "open" );
		}
	}
	});
	$('#menubtn').click(function(){
		if ($('.ui-page-active').jqmData('panel')!=="open") {
			$("#right-panel").panel("open");
		};
	});