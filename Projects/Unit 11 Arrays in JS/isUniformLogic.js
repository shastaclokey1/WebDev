function isUniform(array) {
	// array.forEach(function(elt) {
	// 	if (elt !== first_elt)
	// 		isUniform = false
	// });
	for (var i = 0; i < array.length; i++)
		if (array[i] !== array[0])
			return false;
	return true;
}

var testArray2 = [
	[1,2,3],
	[777,777,777],
	[2,2,4],
	[78,98,3],
	[5,5,5]
];

window.setTimeout(function() {
	// any code within this function will be executed after the page is allowed to load the html.
	console.log("Testing my isUniform function");
	testArray2.forEach(function(elt) {
		console.log(isUniform(elt));
	});
}, 500);