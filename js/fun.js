jQuery(function($){
$( ".et_builder_inner_content" ).attr( "id", "fullpage" );
});
jQuery(document).ready(function( $ ) {
			$('#fullpage').fullpage({
				//options here
		        scrollingSpeed: 1000,
		        navigation: true,
		        slidesNavigation: true
				
			});

			//methods
			$.fn.fullpage.setAllowScrolling(true);
		});