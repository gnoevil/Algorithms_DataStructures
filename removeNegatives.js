/********** p40 *********
* parameters - array
* return - array

* logic
GENERAL
- want to minimize number of touches, so want to move the positive number directly to the position of the
negative number without having to shift everything after the negative number just to get rid of one negative number

KEY STEPS
identify position(-)i and position(+)j

j is finding positive numbers
i tracks where j is going to write to

iterate j each time to traverse through array,
position i will always be written to whenever j finds a positive number
pop all numbers after i including i

*/

function removeNegatives(arr){
	var i = 0;
	var j = 0;
	while (j<arr.length) {
		if (arr[j] >= 0) {
          arr[i] = arr[j];
          i++;
		}
		j++;
	}

 	while (arr.length > i){
 		arr.pop();
 	}

	return(arr);
}

//test cases
x = [-1,-1,5,-1,7]; // => [5,7]
x = [-1,-1,5,-1,7,-1,-1]; // => [5,7]
x = [1,-1,5,-1,7]; // => [1,5,7]
x = [1, 1, -1,5,-1,7, 7]; // => [1,1,5,7,7]
console.log(removeNegatives(x));
