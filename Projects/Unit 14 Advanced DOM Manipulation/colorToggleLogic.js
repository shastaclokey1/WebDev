var body = document.querySelector("body");

document.querySelector("button").addEventListener("click", function() {
	if (body.style.background == "blue")
		body.style.background = "white";
	else
		body.style.background = "blue";
});