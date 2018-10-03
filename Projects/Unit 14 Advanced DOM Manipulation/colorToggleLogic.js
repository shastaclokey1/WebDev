document.querySelector("button").addEventListener("click", function() {
	/*if (document.body.style.background == "blue")
		document.body.style.background = "white";
	else
		document.body.style.background = "blue";*/

	document.body.classList.toggle("blue");
});