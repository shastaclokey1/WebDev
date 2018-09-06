//Function that determines the parity of a number
function isEven(num) {
	if (typeof num === "number") {
		return num % 2 === 0;
	}
	else {
		return "Input was not a number!";
	}
}

console.log("Testing my 'isEven' function");
console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

//Function that computes the factorial of a number
function factorial(num) {
	if (typeof num === "number") {
		var result = 1;
		for (var i = 2; i <= num; i++) {
			result = result * i;
		}
		return result;
	}
	else {
		return "Input was not a number!";
	}
}

console.log("Testing my 'factorial' function");
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

//Function that changes kebab case strings to snake case strings
function kebabToSnake(str) {
	if (typeof str === "string") {
		// var kebabIndex = str.indexOf("-");
		// while (kebabIndex !== -1) {
		// 	str = str.substring(0, kebabIndex) + "_" + str.substring(kebabIndex + 1);
		// 	kebabIndex = str.indexOf("-");
		// }
		// return str;
		return str.replace(/-/g, "_");
	}
	else {
		return "Input was not a string!";
	}
}

console.log("Testing my 'kebabToSnake' function");
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah-blah-blah.doasdlkeffn-la;sdfl;"));