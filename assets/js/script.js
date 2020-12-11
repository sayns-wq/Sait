$('button').on('click', function () {
	var tab = $(this).attr('data-target');

	$('.tab').removeClass('active');
	$(tab).toggleClass('active');
	
	$('.content').removeClass('animate');
	$(tab).find('.content').toggleClass('animate');
});
