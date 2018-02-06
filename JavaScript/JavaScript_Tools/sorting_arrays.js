
function sumFibs(num) {
    var array = [];
    var array2 = [];
    var array3 = [];
    var array4 = [];
    
    var sum= 0;
    var num2 = 0;
    
  num2 = num;
  for (var i = 0; i < num2; num2--) {
      array.push(num2);
  }

    // How to sort an array from least to greatest!
    array.sort(function(a, b){return a - b});
    array2.push(1);
    array2.push(1);
  for (var i = 2; i < array.length; i++) {
        
        if ((array2[i - 2] + array2[i - 1]) <= num) {
            array2.push(array2[i - 2] + array2[i - 1]);
        }
    }
    
 
  console.log("array2:" + array2);
  for (var i = 0; i < array2.length; i++) {
         if (array2[i]%2!==0) {
             array3.push(array2[i]);
    
        
  }
}
    console.log("array3:" + array3);
    sum = array3.reduce(function (a, b) {return a + b;});
    console.log("sum:" + sum);
    return sum;
}

sumFibs(1000);