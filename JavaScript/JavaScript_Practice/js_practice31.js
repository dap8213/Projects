function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var index = 0;
  arr.sort(function(a,b) {
      return a - b;
  });
  console.log("arr:" + arr);
  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      index = arr.indexOf(arr[i]);
      break;
    }
    else if (num > arr[i]) {
      index = arr.indexOf(arr[arr.length-1]);
    } 
      
    }
  
    console.log(index);
  return index;
}

getIndexToIns([2, 5, 10], 15);