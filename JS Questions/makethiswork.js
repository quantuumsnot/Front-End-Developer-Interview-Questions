function duplicate(arr) {
	var arrlen = arr.length;
	for (var i = 0; i < arrlen; i++) {
  	arr.push(arr[i]);
  }
  
  return arr;
}

//duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
console.log(duplicate([1,2,3,4,5]));
