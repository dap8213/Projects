function largestOfFour(arr) {
  // You can do this!
    var value1 = 0;
    var value2 = 0;
    var value3 = 0;
    var value4 = 0;
    
    var arr2 = [];
    
      arr[0].sort(function(a, b) {
      return a - b;
  });
   
      value1 = arr[0][arr.length-1];
    
      arr[1].sort(function(a, b) {
      return a - b;
  }); 
     value2 = arr[1][arr.length-1];
  
      arr[2].sort(function(a, b) {
      return a - b;
     });
    value3 = arr[2][arr.length-1];
    
     arr[3].sort(function(a, b) {
      return a - b;
     });
    value4 = arr[3][arr.length-1];
    
    arr2 = [value1, value2, value3, value4];
  
    
    
  
  return arr2;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);