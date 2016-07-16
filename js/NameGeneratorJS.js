
var middleNames = ["Quinesanes", "Quntz", "Buttlet", "Buttnik"];
var lastName = "Robert Pennekamp";
var yourName = [];
var k = 0;


function nameGenerate() {
	//generates first name
	var firstNames = prompt("What is your first name?", "Finn");
	//middle name generator
	
		//random picks one of the name versions
		var randomPick = Math.round(Math.random())
		yourName = middleNames[randomPick];
		
	//displays full name
	alert("Hi " + firstNames + " " + yourName + " " + lastName + "!");
}
