// Check off specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Clik on X to delet Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("#toggleForm").click(function(){
	$("input[type='text']").fadeToggle();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13 && $(this).val() != ""){
		//grab new todo text from input
		var todoText = $(this).val();
		//clear text input
		$(this).val("");
		//create a new todo item
		AddItemToTodoList(todoText);
	}
});

function AddItemToTodoList(item){
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + item + "</li>");
}