$(document).ready(function() {
	$('#signUp').on('click', function() {
		$(this).addClass('active-btn');
		$('#signIn').removeClass('active-btn');
	});
	$('#signIn').on('click', function() {
		$(this).addClass('active-btn');
		$('#signUp').removeClass('active-btn');
	});	
	$('.btn-submit, header .login').on('click', function() {
		$('.popup_overlay, #login').show();
		// $('#login').show();
	})
	$('.popup_overlay').on('click', function() {
		$('.popup_overlay, #login').fadeOut(500);
	});
});