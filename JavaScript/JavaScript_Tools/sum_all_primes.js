
function sumPrimes(num) {
  var array = [];
  var array2 = [];
  var num2 = 0;
    
  num2 = num;
  for (var i = 0; i < num2; num2--) {
      array.push(num2);
  }
  array.sort(function(a, b){return a - b});
    array2.push(2);
    array2.push(3);
    array2.push(5);
    array2.push(7);
    if (num > 10){
    array2.push(11);
    array2.push(13);
    array2.push(17);
    array2.push(19);
    array2.push(23);
    array2.push(29);
    array2.push(31);
    }
    for(var i = 0; i < array.length; i++) {
       if(array[i] > 1) {
         if((array[i] % 2 !== 0) && (array[i] % 3 !== 0) && (array[i] % 5 !== 0) && (array[i] % 7 !==0) && (array[i] % 11 !==0) && (array[i] % 13 !==0) && (array[i] % 16 !==0) && (array[i] % 17 !==0) && (array[i] % 19 !== 0) && (array[i] % 23 !== 0) && (array[i] % 29 !== 0) && (array[i] % 31 !==0)) {
            array2.push(array[i]);
        }
        }
    }

    
  console.log("array2:" + array2);
  sum = array2.reduce(function (a, b) {return a + b});
  
  
  console.log("sum:" + sum);
  return sum;
}

sumPrimes(977);