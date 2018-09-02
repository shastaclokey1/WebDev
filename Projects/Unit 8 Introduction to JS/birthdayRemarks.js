var age = prompt("How old are you?");
var remark = false;
if (age < 0) {
	console.log("You can't possibly be negative years old.");
	remark = true;
}
if (age == 21) {
	console.log("Happy 21st birthday!");
	remark = true;
}
if (age % 2 == 1) {
	console.log("You're at an odd age!");
	remark = true;
}
if (Number.isInteger(Math.sqrt(age))){
	console.log("You're a perfect square!");
	remark = true;
}
if (remark === false) {
	console.log("Aparently you're not that special.")
}