function sumArray(array) {
	var sum = 0;
	array.forEach(function(elt) {
		sum += elt;
	});
	return sum;
}

var testArray3 = [[1,2,3,4],
				  [8,6,9,0],
 				  [2,5,4,7,3,4,5,6],
 				  [1,1,1,1,1,1,1]];

window.setTimeout(function() {
	// any code within this function will be executed after the page is allowed to load the html.
	console.log("Testing my sumArray function");
	testArray4.forEach(function(array) {
		console.log(sumArray(array));
	});
}, 500);