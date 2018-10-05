//get references to all the html elements we need
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var winMsg = document.querySelector("#winMsg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

//set up global variables we need
var numColorsHard = 6, numColorsEasy = 3;
var colorListenersSet = false;
var isEasy = false;

//initiallize random colors and set up UI
var colors, pickedColor;
initiallizeRandomColors();
resetGameBoardUI();

//set the click listener on the reset button
resetButton.addEventListener("click", function() {
	//re-randomize the colors array and picked color
	initiallizeRandomColors();

	//reset the game board UI with the new colors
	resetGameBoardUI();
});

//set the click listeners for the easy and hard buttons
easyButton.addEventListener("click", function() {
	if (!isEasy) {
		//set the numColors variable to easy mode
		isEasy = true;

		//re-initiallize the colors array and picked color
		initiallizeRandomColors();

		//reset the game board UI with the new colors
		resetGameBoardUI();

		//switch the selected states of the two difficulty mode buttons and reset h1
		easyButton.classList.add("selected");
		hardButton.classList.remove("selected");
	}
});
hardButton.addEventListener("click", function() {
	if (isEasy) {
		//set the numColors variable to easy mode
		isEasy = false;

		//re-initiallize the colors array and picked color
		initiallizeRandomColors();

		//reset the game board UI with the new colors
		resetGameBoardUI();

		//switch the selected states of the two difficulty mode buttons
		hardButton.classList.add("selected");
		easyButton.classList.remove("selected");
	}
});

function resetGameBoardUI() {
	//reset play button, background color of h1, winText, and colorDisplay
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "#232323";
	winMsg.textContent = "";
	colorDisplay.textContent = pickedColor;

	//set up the game board colors/listeners for easy mode
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			//tell the color blocks to show up again when switched to hard mode
			squares[i].style.display = "block";

			//add initial colors to squares
			squares[i].style.backgroundColor = colors[i];

			//add click listeners to squares if they have not been added yet
			if (!colorListenersSet) {
				squares[i].addEventListener("click", colorListener);
			}
		} else {
			squares[i].style.display = "none";
		}
		
	}
	//record that the listeners have been added to each color block
	colorListenersSet = true;
}

function colorListener() {
	//compare element's color to pickedColor to see if they won
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
	//change the color of all the squares to the picked color
	for (var i = 0; i < colors.length; i++)
		squares[i].style.backgroundColor = color;
	//change the color of the h1 background
	h1.style.backgroundColor = color;
}

function initiallizeRandomColors() {
	 if (isEasy)
	 	colors = generateRandomColorsArray(numColorsEasy);
	 else
	 	colors = generateRandomColorsArray(numColorsHard);
     pickedColor = pickRandomColorFromArray(colors);
}

function generateRandomColorsArray(num) {
	//make an array
	var arr = [];

	//add num random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomRGBColor());
	}

	//return that array
	return arr;
}

function randomRGBColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickRandomColorFromArray(colorArray) {
	//generate a random number between 0 and the highest index in colorsArray
	var randNum = Math.floor(Math.random() * colorArray.length);
	//return the element at the random number's index
	return colorArray[randNum];
}