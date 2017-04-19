$(document).ready(function(){


	$("a").on('click', function(event){
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function(){
				window.location.hash = hash;
			});
		};
	});

	$(window).scroll(function () { 
		if ($(window).scrollTop() > 656) {
			$('.navbar').addClass('navbar-fixed');
		}
		if ($(window).scrollTop() < 600) {
			$('.navbar').removeClass('navbar-fixed');
		}
	});
});

// $(".turbulence").hover(function(){
// 	setTimeout(function(){
// 		$(".turbulence").css("background-image", "url(assets/turbulence2.jpg");
// 	}, 1000);
// 		setTimeout(function(){
// 		$(".turbulence").css("background-image", "url(assets/turbulence3.jpg");
// 	}, 2500);
// 	setTimeout(function(){
// 		$(".turbulence").css("background-image", "url(assets/delayedgram2.jpg");
// 	}, 4000);
// 	// Then I need to add buttons for the links	
// });
