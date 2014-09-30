$(document).on('ready', function() {
	// $('button').clone();
	$('.quoteBox').hide();

	var allQuotes = $("<h3>All Quotes</h3>");
	// $('#button').append(allQuotes);
	$('form').after(allQuotes);
	var deleteButton = $("<div class='buttonDelete'>Delete</div>");
	deleteButton.hide();

	$('#button').on('click', function(e) {
		var newQuote = $('.quoteBox').first().clone();
		var newDeleteButton = deleteButton.first().clone();

		var quoteInput = $('.quoteText').val();
		var authorInput = $('.authorText').val();

		newQuote.show();

		newQuote.append('Quote: ' + quoteInput);
		newQuote.append('Author: ' + authorInput);

		newDeleteButton.show();
		$('.quoteBox').last().after(newQuote);
		$('.quoteBox').last().after(newDeleteButton);

		e.preventDefault();
		newQuote.val('');
	});

	deleteButton.on('click', function(){
		console.log('i work');
		newQuote.remove();
		deleteButton.remove();	
	});


});
