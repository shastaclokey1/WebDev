function printReverse(array) {
	for (var i = array.length -1; i >= 0; i--) {
		console.log(array[i]);
	}
}

var testArray1 = [[1,2,3,4],
				  ["a","b","c"],
 				  [2,5,4,7,3,4,5,6]];

window.setTimeout(function() {
	// any code within this function will be executed after the page is allowed to load the html.
	console.log("Tesing my printReverse function");
	testArray1.forEach(printReverse);
}, 500);