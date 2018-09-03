//Print each character from a string using a for loop
console.log("Here's each character from the string 'I am a for loop!!!'");
var str = "I am a for loop!!!";

for (var i = 0; i < str.length; i++) {
	console.log(str[i]);
}

//for loop exersizes
//Exersize 1
console.log("For loops exersize #1");

for (var i = 0; i < 16; i+=8) {
	console.log(i);
}

//Exersize 3
console.log("For loops exersize #2");
var str = "ahceclwlxo";

for (var i = 1; i < str.length; i+=2) {
	console.log(str[i]);
}

//For loop problem set
console.log("Here's all the numbers between -10 and 19 using a for loop.")
for (var i = -10; i < 20; i++) {
	console.log(i);
}

console.log("Here's all the even numbers between 10 and 40 using a for loop.")
for (var i = 10; i <= 40; i+=2) {
	console.log(i);
}

console.log("Here's all the odd numbers between 300 and 333 using a for loop.");
for (var i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}

console.log("Here's all the numbers between 5 and 50 that are divisible by 3 and 5 using a for loop.");
for (var i = 5; i <= 50; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(i);
	}
}