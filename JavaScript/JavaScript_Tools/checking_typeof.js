
function dropElements(arr, func) {
  // Drop them elements.
  var droppedElement = 0;
  var numElementDropped = 0;
    console.log("arr[0]:" + arr[0]);
  for (var i = 0; i < arr.length; i++) {
     if (arr[i] === droppedElement) {
         console.log("It hit the index!");
      break;
    }
      
      
      if (func(arr[i]) === false) {
      droppedElement = arr.splice(i, 1);
          numElementDropped = Number(droppedElement);
      i--;
      
    }
      console.log("droppedElement:" + droppedElement);
      // WHY IT'S IMPORTANT TO CHECK VARIABLE WHAT TYPEOF!!!!
      console.log("droppedElement type of: " + typeof droppedElement);
  }
  return arr;
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2; });