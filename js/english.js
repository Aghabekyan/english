$(document).ready(function() {
	$('.header-login').click(function() {
		$('.form').addClass('show'); 
	});
	$('.fa-times').click(function() {
		$('.form').removeClass('show');
	});
	$('.log-in').click(function(){
		$('.login_form').toggleClass('show_login');
		$('.login_form_container').toggleClass('show_login');
		
	})

	
});