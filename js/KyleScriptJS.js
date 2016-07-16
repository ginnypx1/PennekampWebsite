//when hover on .script_title p, cursor changes
//when hover on .script_title p, background color/ text color changes

var $overlay = $('<div id="overlay"></div>');

//Add overlay
$(".KyleScreenplays").append($overlay);

//1. Capture the click event on a screenplay div
$(".screenplay").click(function(){
	var details = this.querySelector("ul");
	//1.2 Update the overlay with the text linked
	$overlay.append(details);
	//1.1 Show the overlay
	$overlay.show();
});


//2. When overlay is clicked
$overlay.click(function(){
	//2.1 Hide overlay
	$overlay.hide();
	$overlay.empty();
});

