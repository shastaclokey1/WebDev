var todoListUl = document.querySelectorAll("ul li");

for (var i = 0; i < todoListUl.length; i++){
	todoListUl[i].addEventListener("click", function() {
		this.classList.toggle("taskComplete");
	});
	todoListUl[i].addEventListener("mouseover", function() {
		this.classList.add("taskFocused");
	});
	todoListUl[i].addEventListener("mouseout", function() {
		this.classList.remove("taskFocused");
	});
}