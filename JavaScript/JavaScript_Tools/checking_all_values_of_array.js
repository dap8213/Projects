
function smallestCommons(arr) {
  var array = [];
  var max = arr[1];
  var min = arr[0];
  var holder = min;
  var commonFactor = 1;
  var exitLoop = true;
  var checkValues2;
    

    
  if (min > max) {
      min = max;
      max = holder;
  }
  
    
  console.log("min:" + min);
  console.log("max:" + max);
  
  for (var i = max; min <= i; i--) {
      array.push(i);
  }
    
console.log("array:" + array);
console.log("commonFactor:" + commonFactor);
    
    
    
    
while(exitLoop) {   
function checkingAllValues(arrayValues) {
    return commonFactor % arrayValues === 0;
}



var values = array.every(checkingAllValues);
    
if (values === false) {
    commonFactor++;
}
    
else if (values === true) {
    exitLoop = false
}
}
console.log("values:" + values);
console.log("commonFactor:" + commonFactor);

  return commonFactor;
}


smallestCommons([23, 18]);