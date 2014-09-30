$(document).on('ready', function() {
	// $('button').clone();
	$('.quoteBox').hide();
	$('form').hide();

	$('.quoteButton').on('click', function() {
		$('form').toggle();
	});

	$('.buttonSubmit').on('click', function(e) {
		var newQuoteBox = $('.quoteBox').first().clone();
		var newDeleteButton = $('.buttonDelete').first().clone();

		var quoteInput = $('.quoteText').val();
		var authorInput = $('.authorText').val();

		newQuoteBox.show();

		newQuoteBox.append('Quote: ' + quoteInput);
		newQuoteBox.append('Author: ' + authorInput);

		$('.quoteBox').last().after(newQuoteBox);
		// $('.quoteBox').last().after(newDeleteButton);

		e.preventDefault();
	});

	$(document).on('click', '.buttonDelete', function(){
		$(this).parent('.quoteBox').hide();	
	});


});
