/*
Name: Brandon Hewlett
Site: Portfolio - Brandon Hewlett
File: javascript.js. All the javascript (excluding Jquery) for the site. 
*/

	$(function() {
		
		$( "#accordion" ).accordion();
		

		
		$("#tabs, #subtabs").tabs();
		

		// Hover states on the static widgets
		$( "#dialog-link, #icons li" ).hover(
			function() {
				$( this ).addClass( "ui-state-hover" );
			},
			function() {
				$( this ).removeClass( "ui-state-hover" );
			}
		);
	});

/*Javascript for Photo Slider*/
			var photos=new Array()
			var which=0

			/*Change the below variables to reference your own images. You may have as many images in the slider as you wish*/
			photos[0]="images/javaproj.jpg"
			photos[1]="images/visualproj.jpg"
			photos[2]="images/proj_mng.jpg"


			function backward(){
			if (which>0){
			window.status=''
			which--
			document.images.photoslider.src=photos[which]
			}
			}

			function forward(){
			if (which<photos.length-1){
			which++
			document.images.photoslider.src=photos[which]
			}
			else window.status='End of gallery'
			}