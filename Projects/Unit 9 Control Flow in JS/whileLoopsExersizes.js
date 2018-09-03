//Exersize 1
console.log("Here's the odd numbers less than 10.");
var num = 1;

while (num <= 10) {
	console.log(num);
	num += 2;
}

//Exersize 2
console.log("Here's the numbers less than twenty that are divisible by 4.");
num = 1;

while (num <= 20) {
	if (num % 4 === 0) {
		console.log(num);
	}
	num++;
}

//Exersize 3 ( infinite loop example )
// num = 100;

// while (num < 150) {
// 	console.log(num + 1);
// 	num--;
// }

/*Problem Set
  <p>1. Print all the numbers between -10 and 19.</p>
  <p>2. Print all even numbers between 10 and 40.</p>
  <p>3. Print all odd numbers between 300 and 333.</p>
  <p>4. Print all numbers divisible by 5 AND 3 between 5 and 50.</p>*/

//Problem 1
console.log("Here's all the numbers between -10 and 19.");
num = -10;

while (num < 20) {
	console.log(num);
	num++;
}

//Problem 2
console.log("Here's all the even numbers between 10 and 40.");
num = 10;

while (num <= 40) {
	console.log(num);
	num+=2;
}
//could have also used an if statement and mod operator to check the parity

//Problem 3
console.log("Here's all the odd numbers between 300 and 333.");
num = 300;

while (num <= 333) {
	if (num % 2 !== 0) {
		console.log(num);
	}
	num++;
}

//Problem 4
console.log("Here's all numbers divisible by 5 AND 3 between 5 and 50.");
num = 5;

while (num <= 50) {
	if (num % 3 === 0 && num % 5 === 0)
		console.log(num);
	num++;
}