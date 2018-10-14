var squares = document.querySelectorAll("#colorBoxes .square");
var colorDisplay = document.querySelector("h1 #rgbDisplay");
var winMsg = document.querySelector("#settingsStripe #winMsg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#settingsStripe #reset");
var mode = document.querySelectorAll("#settingsStripe .mode");

var numColorsHard = 6, numColorsEasy = 3;
var colorListenersSet = false;
var easyModeIndex = 0, hardModeIndex = 1;
var colors, pickedColor;

resetGame();

resetButton.addEventListener("click", function() {
	resetGame();
});

for (var i = 0; i < mode.length; i++) {
	mode[i].addEventListener("click", function() {
		for (var i = 0; i < mode.length; i++)
			mode[i].classList.remove("selected");
		this.classList.add("selected");
		resetGame();
	});
}

function resetGame() {
	initiallizeRandomColors();
	resetGameBoardUI();
}

function resetGameBoardUI() {
	resetHeaderAndModes();
	resetGameBoardColorsAndListeners();
}

function resetHeaderAndModes() {
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	winMsg.textContent = "";
	colorDisplay.textContent = pickedColor;
}

function resetGameBoardColorsAndListeners() {
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";

			squares[i].style.backgroundColor = colors[i];

			if (!colorListenersSet) {
				squares[i].addEventListener("click", colorListener);
			}
		} else {
			squares[i].style.display = "none";
		}
		
	}
	colorListenersSet = true;
}

function colorListener() {
	if (this.style.backgroundColor === pickedColor) {
		winMsg.textContent = "You Win!";
		changeColorsOnWin(this.style.backgroundColor);
		resetButton.textContent = "Play Again";
	} else {
		this.style.backgroundColor = "#232323";
		winMsg.textContent = "Try Again";
	}
}

function changeColorsOnWin(color) {
	for (var i = 0; i < colors.length; i++)
		squares[i].style.backgroundColor = color;
	h1.style.backgroundColor = color;
}

function initiallizeRandomColors() {
	 if (mode[easyModeIndex].classList.contains("selected"))
	 	colors = generateRandomColorsArray(numColorsEasy);
	 else
	 	colors = generateRandomColorsArray(numColorsHard);
     pickedColor = pickRandomColorFromArray(colors);
}

function generateRandomColorsArray(num) {
	var arr = [];
	for (var i = 0; i < num; i++)
		arr.push(randomRGBColor());
	return arr;
}

function randomRGBColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickRandomColorFromArray(colorArray) {
	var randNum = Math.floor(Math.random() * colorArray.length);
	return colorArray[randNum];
}