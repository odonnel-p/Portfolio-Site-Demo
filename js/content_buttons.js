$('.icon_blue_left').hover(

	//on hover
	function() { 

		//change border to lilac
		$(this).css('border-left', '8px solid #964997');

		//change icon to hover
		var info = $(this).data( "information" );
		$(".icon_svg", this).attr("src", "icons/menu_icon_"+info+" hover.png");
		//change h5 text to lilac
		$(".inline_icon", this).css('color', '#964997');

	},

	//off hover
	function() { 

		//border back to blue
		$(this).css('border-left', '8px solid #4c254d');

		//icon back to outline
		var info = $(this).data( "information" );
		$(".icon_svg", this).attr("src", "icons/menu_icon_"+info+".png");

		//h5 text back to blue
		$(".inline_icon").css('color', '#4c254d');
	}
);

