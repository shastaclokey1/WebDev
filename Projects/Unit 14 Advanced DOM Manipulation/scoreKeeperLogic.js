var winningScore = 5;
var p1Score = 0;
var p2Score = 0;
var p1Label = document.querySelector("#p1");
var p2Label = document.querySelector("#p2");
var winningScoreLabel = document.querySelector("#winningScore");

document.querySelectorAll("button")[0].addEventListener("click", function(){
	if (p1Score < winningScore && p2Score < winningScore) {
		p1Score++;
		p1Label.textContent = p1Score;
	}
	if (p1Score === winningScore)
		p1Label.classList.add("greenText");
});

document.querySelectorAll("button")[1].addEventListener("click", function(){
	if (p1Score < winningScore && p2Score < winningScore) {
		p2Score++;
		p2Label.textContent = p2Score;
	}
	if (p2Score === winningScore)
		p2Label.classList.add("greenText");
});

document.querySelectorAll("button")[2].addEventListener("click", reset);

document.querySelector("input").addEventListener("input", function(){
	winningScore = Number(this.value);
	winningScoreLabel.textContent = winningScore;
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Label.textContent = p1Score;
	p2Label.textContent = p2Score;
	p1Label.classList.remove("greenText");
	p2Label.classList.remove("greenText");
}