function destroyer(arr, num1, num2, num3) {
  // Remove all the values
  console.log("arr:"+arr);
  console.log("num1:"+num1);
  console.log("num2:"+num2);
  console.log("num3:"+num3);
  var arr2 = [];
  var index = 0;
  var count = 0;
    
  
  while(count <= 1) {
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] === num1) {
          index = arr.indexOf(arr[i]);
          arr.splice(index, 1);
          console.log("index:" + index);
      }
      
      
  }
    count++;
  }
  while(count <= 4) {
   for (var i = 0; i < arr.length; i++) {
      if (arr[i] === num2) {
          index = arr.indexOf(arr[i]);
          arr.splice(index, 1);
          console.log("index:" + index);
      }
       
       
   }
    count++;
}
    while(count <= 6) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === num3) {
          index = arr.indexOf(arr[i]);
          arr.splice(index, 1);
          console.log("index:" + index);
      }
        
   }
    count++
}
  
    
    
  console.log(arr);
  return arr;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);