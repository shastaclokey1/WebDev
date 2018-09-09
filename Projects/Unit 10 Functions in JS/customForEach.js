function customForEach(arr, func) {
	//loop through array
	for (var i = 0; i < arr.length; i++){
		//call func for each item in array
		func(arr[i]);
	}
}

Array.prototype.myForEach = function(func) {
	//loop through calling array
	for (var i = 0; i < this.length; i++){
		//call func for each item in array
		func(this[i]);
	}
}