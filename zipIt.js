function insertAt(position, value, arr){
  arr.push(value);
  for ( i=1; i< arr.length - position; i++ ) {
    var temp = arr[arr.length-1-i];
    arr[arr.length-1-i]=arr[arr.length-i];
    arr[arr.length-i] = temp;
  }
}

function zipIt(arr1, arr2){
  for(var i=0; i<arr2.length;i++){
    insertAt(2*i+1, arr2[i], arr1);
  }
   console.log(arr1)
}

var arr1 = [1,2,3];
var arr2 = [4,5,6,7];
var arr3 = zipIt(arr1, arr2);
