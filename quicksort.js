function partition (arr, startIndex, endIndex) {
  // Base case for the recursion
  if (endIndex - startIndex <= 1) { return arr; }
  // Defining start index for the first call
  if (!startIndex) { startIndex = 0 }
  // Defining end index for the first call
  if (!endIndex) { endIndex = arr.length }

  // Pivot starts as the last thing
  let pivot = endIndex-1;
  for (let i = pivot-1; i >= startIndex; i--) {
    if (arr[i] > arr[pivot]) {
      // First swap to swap the bigger with pivot
      let tmp = arr[pivot];
      arr[pivot] = arr[i];
      arr[i] = tmp;
      // Update pivot
      pivot--;
      // Swap pivot with i
      // This second swap does nothing if pivot is right next to it.
      tmp = arr[pivot];
      arr[pivot] = arr[i];
      arr[i] = tmp;
    }
  }
  // Tail recursion
  // Recursive call for the left side
  partition(arr, startIndex, pivot);
  // Recursive call for the right side
  partition(arr, pivot, endIndex);

  // Return for good measure but not completely necessary
  // since it modifies the original array
  return arr;
}

// Testing
const values = 10;
let rng = [];
for (let i = 0; i < values; i++) {
  rng.push(Math.floor(Math.random()*(200)-100));
}
const start = Date.now();
partition(rng);
const end = Date.now();
console.log(end-start);
