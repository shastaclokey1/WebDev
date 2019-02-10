// Check off specific Todos by clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});

// Clik on X to delet Todo
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});