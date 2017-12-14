//
//
// In-line dynamic menu
//
//
$('.menu_icon').hover(

	function() {	var info = $(this).data( "information" );
					var sel = $('.menu_selected').data( "information" );
					
					//stop all other animations
					$('.menu_under').stop(true,true);

					//all non-selected icons go white
					if (info!==sel) { $('#'+sel).attr('src','icons/menu_icon_'+sel+'.png'); }

					//hovered icon goes pink
					$('#'+info).attr('src','icons/menu_icon_'+info+' hover.png');
					//hovered menu title brought up
					$('#mu_'+info).animate({opacity: 1}, 50);  
	},

	function() {	var info = $(this).data( "information" );
					var sel = $('.menu_selected').data( "information" );
					
					//stop all other animations
					$('.menu_under').stop(true,true);

					//this page's icon goes back to selected
					$('#'+sel).attr('src','icons/menu_icon_'+sel+' select.png');

					//hovered icon goes back to white
					if (info!==sel) { $('#'+info).attr('src','icons/menu_icon_'+info+'.png'); }
					//disappear menu title
					$('#mu_'+info).animate({opacity: 0}, 100); 
	}
) // -- end hover





//
//
// Page title is menu selected
//
//
var title = $( '.menu_selected' ).children().text();
// console.log(title);
$('#page_title').text(title);





//
//
// AJAX load new content in content window
// Based off code tutorial from J. Padolsey
// https://code.tutsplus.com/tutorials/how-to-load-in-and-animate-content-with-jquery--net-26
//
//
$(document).ready(function(){

	// $('.menu_icon a').click( function() {

	// 	// Check for hash value in URL
	//     var hash = window.location.hash.substr(1);
	//     var href = $('.menu_icon a').each(function(){
	//         var href = $(this).attr('href');
	//         if(hash==href.substr(0,href.length-5)){
	//             var toLoad = hash+'.html #content';
	//             $('#content').load(toLoad)
	//         } 
	//     });

	// 	var toLoad = $(this).attr('href')+' #content';
	// 	$('#content').animate({opacity:0}, 'fast', 'swing', loadContent);

	// 	// ('fast', loadContent);

	// 	// $('#wrapper').append('<span id="load">LOADING...</span>');
	// 	// $('#load').fadeIn('normal');

	// 	window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);


	// 	// Functions for AJAX laod
	// 	function loadContent() {
	// 		$('#content').load(toLoad,'',showNewContent);
	// 	}

	// 	function showNewContent() {
	// 		$('#content').animate({opacity:1}, 900);
	// 		$('#content:first-child').removeAttr('id');
	// 		$('#content:first-child').attr('class', 'columns col1 filtr-container');
	// 	}

	// 	// function hideLoader() {
	// 	// 	$('#load').fadeOut('normal');
	// 	// }

	// 	return false;

	// }); // -- end click function

	
}); // -- end docuReady function







// $(document).ready(function(){
				
// 				//
// 				//
// 				// DYNAMIC MENU
// 				$('.menu_icon').hover(

// 					function() {	var info = $(this).data( "information" );
// 									var sel = $('.menu_selected').data( "information" );
// 									// console.log(info); console.log(sel);
// 									$('.menu_under').stop(true,true);
// 									if (info!==sel) { $('#'+sel).attr('src','icons/menu_icon_'+sel+'.svg'); }
// 									$('#'+info).attr('src','icons/menu_icon_'+info+' hover.svg');
// 									$('#mu_'+info).animate({opacity: 1}, 50);  },

// 					function() {	var info = $(this).data( "information" );
// 									var sel = $('.menu_selected').data( "information" );
// 									// console.log(info);
// 									$('.menu_under').stop(true,true);
// 									$('#'+sel).attr('src','icons/menu_icon_'+sel+' hover.svg'); 
// 									if (info!==sel) { $('#'+info).attr('src','icons/menu_icon_'+info+'.svg'); }
// 									$('#mu_'+info).animate({opacity: 0}, 100); }
// 				) // -- end hover

// 				//
// 				//
// 				// CHANGE TITLE OF PAGE TO SELECTED MENU
// 				$('#page_title').text()
// 				var title = $( '.menu_selected' ).children().text();
// 				// console.log(title);
// 				$('#page_title').text(title).css('text-transform', 'uppercase');



// 				$('.icon_blue_left').hover(

// 					function() {	//console.log("hover");
// 									var info = $(this).data( "information" );
// 									$('#'+info+"_button").attr('src','icons/menu_icon_'+info+' hover.svg');},

// 					function() {	//console.log("remove");
// 									var info = $(this).data( "information" );
// 									$('#'+info+"_button").attr('src','icons/menu_icon_'+info+'.svg'); }
// 				)

// 				// $(".icon_button").hover(

// 				// 	function() {	console.log("hover2");
// 				// 					var info = $(this).data( "information" );
// 				// 					$('#'+info+"_button").attr('src','icons/menu_icon_'+info+' hover.svg');},
									

// 				// 	function() {	console.log("remove2");
// 				// 					var info = $(this).data( "information" );
// 				// 					$('#'+info+"_button").attr('src','icons/menu_icon_'+info+'.svg'); }
// 				// )

// 				function SelectText(element) {
// 					// console.log(element);
// 				    var doc = document; 
// 				    var text = element;
// 				    var range, selection;
				        
// 				    if (doc.body.createTextRange) {
// 				        range = document.body.createTextRange();
// 				        range.moveToElementText(text);
// 				        range.select();
// 				    } else if (window.getSelection) {
// 				        selection = window.getSelection();        
// 				        range = document.createRange();
// 				        range.selectNodeContents(text);
// 				        selection.removeAllRanges();
// 				        selection.addRange(range);
// 				    }
// 				}

// 				document.onclick = function(e) {    
// 				    if (e.target.className === 'copy') {
// 				        SelectText(e.target);
// 				    }
// 				};

// 				//
// 				//
// 				// PUT QUOTES BEHIND QUOTE
// 				// $('.quote').prepend('<img class="qt_icon" src="icons/icon_quotes.png" />');
// 				// $('.qt_icon').attr('position','absolute')
// 							 // .attr('top')
    

// }) // -- end docuready 


