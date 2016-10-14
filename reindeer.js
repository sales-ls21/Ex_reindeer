var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", 
"Periwinkle", "Azure"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", 
"Cupid", "Donner", "Blitzen"];
var nameWithColor = "";

for (var i = 0; i < colors.length; i++) {
	var santasReindeer = [];
	santasReindeer = colors[i]+ " " + reindeer[i];
	nameWithColor += "<p>" + santasReindeer + "</p>";

	console.log(santasReindeer); 
}


var hohohoElement = document.getElementById("coloredReindeer");

hohohoElement.innerHTML = nameWithColor;

