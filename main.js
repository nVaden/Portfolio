$(document).ready(function($){


	var spinArray = ['animation900','animation1080','animation1260','animation1440','animation1620','animation1800','animation1980','animation2160'];

	function getSpin() {
		var spin = spinArray[Math.floor(Math.random()*spinArray.length)];
		return spin;
	}

	$('#coin').on('click', function(){

		$('#coin').removeClass();

		setTimeout(function(){
			$('#coin').addClass(getSpin());
		}, 100);

	});


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


