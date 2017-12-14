$(document).ready(function(){
		
	//
	//
	// ADD "filter" AND "simplefilter" CLASS
	//
	//
		$('.desc_text').each( function() {
			$('li', this).attr('class', 'filter');
			$('ul', this).attr('class', 'simplefilter')
		})


	//
	//
	// ADD TITLE TO SUBMENU
	//
	//

		if( $('#page_title').text() == 'Selected Works' ) { $('#page_title').attr('title', 'show all selected works'); }
	
	//
	//
	// ADD Xs to list elements
	//
	//
		$('.simplefilter li').append(' <img height="16px" width="16px" class="clickable" data-filter="all" src="icons/exits_li.svg" title="remove filter">')

		$('li img').addClass('exit');

		//do not add //$('#filter_title').append('<img src="icons/exits_h2.jpg">')
		// 						.attr('width', '28px')
		// 						.attr('height', '28px')
		// 						.attr('src', 'icons/exits_h2.svg')
		// 						.attr('class', 'exit');		

	//
	//
	// RUN FILTERIZER
	//
	//
    $(function() {

    	//
    	//
    	// Initialize filterizr with default options
        //
        //
        $('.filtr-container').filterizr();
        
        //
        //
        // ADD ARROW AND EXIT TO P
        //
        //
		$('.date_sort').append(' <img class="exit"  height="16px" width="16px" src="icons/exits_li.svg" title="remove sort">');
		$('.date_sort').append(' <img class="sort"  height="16px" width="16px" src="icons/exits_p-inactive.svg" title="reverse sort">');

		//
		//
		// SORT HOVER
		//
		//
		var sorted = null;
		
		$('.date_sort > p').hover( 
            	function() { 	$(this).css('color', '#4c254d');
            					$('.sort').animate({opacity: 1}, 50); },
            				 
            	function() {  if (sorted !== true) { $('.sort').animate({opacity: 0}, 50);
            									     $(this).css('color', '#a592a6'); } }
            	
            );

		//
		//
		// SORT BY DATE
		//
		//
			var sw;


			$('.date_sort>p').click( function() {
				// console.log("date sort is on: "+$(this).hasClass('sort-on'));

				sorted = true;

				if (sw==0) {
					$('.filtr-container').filterizr('sort', 'date', 'asc'); sw=1;
					console.log ('2. if ran');
					$('#sort_title').text(', chronological');
					$('.sort').attr('src', 'icons/exits_p-des.svg');
				} else if (sw==1) {
					$('.filtr-container').filterizr('sort', 'date', 'desc'); sw=0;
					console.log ('3. else if ran');
					$('#sort_title').text(', most recent');
					$('.sort').attr('src', 'icons/exits_p-asc.svg');
				} 
				else {
					//do this if date isn't selected yet and clicked once
					$('.filtr-container').filterizr('sort', 'date', 'desc');

					$('.date_sort img').animate({opacity:1}, 50);
					$('.date_sort > p').css('color', '#4c254d');
					$('.sort').attr('src', 'icons/exits_p-asc.svg')
					$('.sort').animate({opacity: 1}, 50);

					$('#sort_title').text(', most recent');
					console.log ('1. else ran');
					sw = 0;
				}

				$('.date_sort>.exit').click( function() {
					$('p>.exit').removeClass('sort-on');
					$('.sort').animate({opacity: 0}, 50);
					$('.date_sort img').animate({opacity:0}, 50);
					$('.filtr-container').filterizr();
					$('p >.sort').attr('src', 'icons/exits_p-inactive.svg');
					$('#sort_title').text('');
					sorted = false;
					sw = null;
					console.log("exit ran");
				});

				$('#sort_title>.exit').click( function() {
					$('p>.exit').removeClass('sort-on');
					$('.sort').animate({opacity: 0}, 50);
					$('.date_sort img').animate({opacity:0}, 50);
					$('.filtr-container').filterizr();
					$('p >.sort').attr('src', 'icons/exits_p-inactive.svg');
					$('#sort_title').text('');
					sorted = false;
					sw = null;
						console.log("exit ran");
				});

				
				
			});
        
        //FILTER BY PROJECT TYPE
        $('.simplefilter li div p').click(function() {


        	var check = $(this).hasClass('f-active');
        	console.log("p clicked");

        	//if filter is already active, and you click it again to remove it
        	if ( $(this).hasClass('f-active')) { 
        				$('li.f-active').removeClass('f-active');
        				$('li').removeClass('f-nonactive'); 
        				$('#filter_title').text('');
        				$('.filtr-container').filterizr('filter', 'all');
        				$('.exit').removeClass('exit-on');
        	} 
        	//if the filter is not active, and we want to switch to it
        	else {
		                $('.simplefilter li').removeClass('f-active');
		                $('li').addClass('f-nonactive');
		                var fb = $(this).text();
		                $('#filter_title').text('');
		                $('#filter_title').prepend('&nbsp;'+fb);
		                $('.exit').removeClass('exit-on');

		                $('li').each( function() {
		                	if ( $(this).text()==fb ) { 
		                		$(this).removeClass('f-nonactive'); 
		                		$(this).addClass('f-active');
		                		$('img', this).addClass('exit-on'); }
		                });       
		    }

		    //click on X to remove title and filter and x
			// $('.exit-on').click( function() {
			// 	$('#filter_title').text('');
			// 	$('.filtr-container').filterizr('filter', 'all');
			// 	$('.exit').removeClass('exit-on');
			// 	console.log("exit-on ran");
			// });

			$('#page_title').click( function() { 
				$('.simplefilter li').removeClass('f-active');
				$(this).removeClass('f-nonactive'); 
				$('#filter_title').text('');
				$('.exit').removeClass('exit-on');
			});

        });

		$('.exit').click( function() {
			// $('li.f-active').removeClass('f-active');
			// $('li').removeClass('f-nonactive'); 
			// $('#filter_title').text('');
			$('.filtr-container').filterizr();
			// $('.exit').removeClass('exit-on');
			console.log("exit pressed")

		})
			
    //
    //
    // FILTERIZR HOVER
    //
    //
            $('.simplefilter li').hover( 
            	function() { $('.simplefilter li').addClass('f-nohover');
            				 $(this).removeClass('f-nohover');
            				 $(this).addClass('f-hover'); },
            	function() { $('.simplefilter li').removeClass('f-nohover')
            				 $(this).removeClass('f-hover'); }
            	
            );
        }); // -- end of run Filterizr

	$(function() {

	

	}); // -- end of filter by date



})