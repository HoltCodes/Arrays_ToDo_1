// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushToFront(arr, val) {
  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i+1] = arr[i];
  }
  arr[0] = val;
}

//Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFont(arr) {
  var returnVal = arr[0];
  for(var i = 1; i < arr.length; i++) {
    arr[i-1] = arr[i];
  }
  arr.pop();
  return returnVal;
}

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insetAt(arr, val, ind) {
  for (val i = arr.length - 1; i >= ind; i--) {
    arr[i+1] =arr[i];
  }
  arr[ind] = val;
}