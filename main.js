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

	//take all author names and show in new link
	$(document).on('click', authorInput, function() {
		var arrAuthor = [];
		
		if(authorInput.text() === authorInput.text()) {
			arrAuthor.push(authorInput[i]);
		}
	})
});

//all quotes then filter out author name where .text() === . text(). hide rest of quotes show only .text 

//possibly a remove and render feature

//create a for loop for everytime an authors name is entered. 
//if author name is repeated [i] === [i], push author name into an array. 
//when click on name/ linke show or hide author grouping array (toggle).

