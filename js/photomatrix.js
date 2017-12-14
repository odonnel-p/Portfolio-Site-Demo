$(document).ready(function(){

	//
	//
	// DYNMAIC THUMBNAIL DESCRIPTIONS
	//
	//
		// $('.project').hover(
		// 	function() {	var access = $(this).data( "access" );
		// 					//console.log(access);

		// 					//show description
		// 					//$('#desc'+access).animate({opacity: 1}, 50); 
							
		// 					//wid
		// 					//$('h4', this).css('font-weight', '400')

		// 					}, 
		// 	function() {	var access = $(this).data( "access" );
		// 					//$('#desc'+access).animate({opacity: 0}, 50);
		// 					// $('h4', this).css('font-weight', '300') 
		// 				}
		// )

	//
	//
	// APPEND THUMBNAILS
	//
	//
	$('.thumbnail').each( function() {
		var access = $(this).parent().data( "access" );
		var id = $(this).parent().attr( "id" );

		if (id == 'fio') { 
			//console.log(access+", "+id); 
		}
		//console.log(find);
		
		$(this).append('<div class="thumb_back clickable"><img class="thumb_backimg" src="thumbnails/thumb__'+access+'_'+id+'.jpg"></img></div>');
		$(this).append('<svg class="duotone svg"><defs><filter id="dt'+access+'" class="duotone-filter"><feColorMatrix class="feMatrix" type="matrix" values="1  0  0  0  0 1  0  0  0  0  0  0  0  0 0  0  0  1  0"/></filter></defs><image class="thumbimg imgblue clickable"  height="100%" filter="url(#dt'+access+')" href="thumbnails/thumb__'+access+'_'+id+'.jpg"/></div></svg>');
		
	});

	//
	//
	//PHOTO FILTER
	//
	//
	function convertToDueTone(color1, color2) {
			$('.svg').each ( function () {
				// console.log(i);
				  var matrix = this.querySelector('feColorMatrix');
				  var value = [];
				  value = value.concat(
				  [color1[0]/256 - color2[0]/256, 0, 0, 0, color2[0]/256]);
				  value = value.concat(
				  [color1[1]/256 - color2[1]/256, 0, 0, 0, color2[1]/256]);
				  value = value.concat(
				  [color1[2]/256 - color2[2]/256, 0, 0, 0, color2[2]/256]);
				  value = value.concat([0, 0, 0, 1, 0]);
				  matrix.setAttribute('values', value.join(' '));
				// i++;
			})
	}

	//
	//
	// NAVY (slightly darker than site color)
	//
	//
	convertToDueTone([256, 256, 256], [53,25,53]);

	//
	//
	// PUT TAGS IN ORDER
	//
	//

	function sortUL(selector) {
			var $ul = $(selector);
			$ul.find('li').sort(function (a, b) {
			    var upA = $(a).text().toUpperCase();
			    var upB = $(b).text().toUpperCase();
			    return (upA < upB) ? -1 : (upA > upB) ? 1 : 0;
			}).appendTo(selector);
			};

		
		$('ul').each( function() { sortUL(this); });

})