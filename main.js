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
