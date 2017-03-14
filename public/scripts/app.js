//////////////////////
///                ///
//////////////////////

var app = (function() {
	//offset is the height of the menu
	var offset = 50;

	//JQUERY
	function init() {
		console.log("Initializing App");
		//Get the screen height
		var height = $(window).height();//return integer
		//set the height of all class elements "screen"
		$('.screen') 
			.css('height', (height - offset).toString() + 'px') 
			.css('top', offset.toString() + 'px');

		$('ul li').click(function() {
			$(this).addClass('active');
		});

	}

	function scroll(selector) {
		$('ul li').removeClass('active');
		var top = $(selector).offset().top;
		$(window).scrollTo(top - offset, 500);
	}

	return {
		"init": init,
		"scroll": scroll
	}
})();


app.init();
