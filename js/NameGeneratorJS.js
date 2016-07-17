
var middleNames = ["Quinesanes", "Quntz", "Bad Boy", "Buttlet", "Buttnik", "Butt"];
var lastName = "Robert Pennekamp";
var yourName = [];
var k = 0;

$("#nameGenerator").click(function() {
	// clear field
	$("#display-name").text(" ");
	// grab input value
	var firstName = $('input:text').val();
	// generate middle name
	var randomPick = Math.floor(Math.random() * middleNames.length);
	yourName = middleNames[randomPick];
	// generate full name
	var displayName = ("Hi " + firstName + " " + yourName + " " + lastName + "!");
	// display name
	$("#display-name").append(displayName);
}); // end click function

