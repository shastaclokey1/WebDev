var todos = [];
window.setTimeout(function() {
  // any code within this function will be executed after the page is allowed to load the html.
  var quit = false;
  var action_response = prompt("What would you like to do?");
  while (action_response !== "quit") { 
  	//handle input
  	if (action_response === "new") {
  		addTodo();
  	} else if (action_response === "list") {
  		listTodos();
  	} else if (action_response === "delete") {
  		deleteTodo();
  	} else {
  		alert("Input was not a recognized command.")
  	}
  	//ask for input
  	action_response = prompt("What would you like to do?");
  }
  console.log("Thanks for using our todo list app!");
}, 500);

function listTodos() {
	//list all the todo elements on separate lines
	console.log("*****");
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	});
	console.log("*****");
}

function addTodo() {
	//ask for new todo
  	todos.push(prompt("Enter a new todo."));
}

function deleteTodo() {
	//delete a todo list item at specified index
	var index_to_delete = prompt("Enter index of todo to delete.");
	var element_removed = todos.splice(index_to_delete, 1);
	console.log(element_removed + " was removed from todo list.");
}