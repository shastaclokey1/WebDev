var numGuess = Number(prompt("Guess what number I am thinking of!"));
var correctNum = 7;
if (numGuess === correctNum) {
	alert("Nicely Done! Here's a gold star for guessing my number!")
}
else if (numGuess > correctNum) {
	alert("Sorry, you guessed too high...");
}
else {
	alert("Sorry, you guessed too low...");
}