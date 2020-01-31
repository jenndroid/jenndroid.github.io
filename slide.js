//This works to move the first in line to the back. 

var arr = ['A', 'B', 'C', 'D', 'E'];
console.log(arr);

/*
for (let i = 0; i < 5; i++){ 
	let Selected = arr.shift();
	console.log(Selected);
	console.log(arr);

	arr.push(Selected);
	console.log(arr);

	if (i == 4){
		i = 0;
		console.log(i); 
	}
}
 */

let selectedPrev = arr[arr.length-1];
console.log(selectedPrev);

arr.pop(selectedPrev);
arr.unshift(selectedPrev);
console.log(arr, arr[0]);


