
function uniteUnique(arr) {
  var newArray1 = [];
  var newArray2 = [];
  var newArray3 = [];
  var newArray4 = [];
  var finalArray = [];
  var index = 0;
    
  newArray1 = arguments[0];
  newArray2 = arguments[1];
  newArray3 = arguments[2];
  newArray4 = arguments[3];
  
  console.log("arr:" + arr);
  console.log("arguments:" + arguments);
  console.log("arguments[0]:" + arguments[0]);
  console.log("arguments[1]:" + arguments[1]);
  console.log("arguments[2]:" + arguments[2]);
  console.log("arguments[3]:" + arguments[3]);
  
    
  
    
  console.log("newArray1:" + newArray1);
  console.log("newArray2:" + newArray2);
  console.log("newArray3:" + newArray3);
  console.log("newArray4:" + newArray4);
  
  console.log("arguments.length:" + arguments.length);
  
  if (arguments.length <= 2) {
      for (var i = 0; i < newArray1.length; i++) {
        for (var k = 0; k < newArray2.length; k++) {
            if (newArray1[i] === newArray2[k]) {
            index = newArray2.indexOf(newArray2[k]);
            newArray2.splice(index, 1);
          
      }
  }
  }
    finalArray = newArray1.concat(newArray2);
  }
    else if (arguments.length <= 3) {
        
           console.log("Testing else condition!");
  
  
  for (var i = 0; i < newArray1.length; i++) {
      for (var k = 0; k < newArray2.length; k++) {
        if (newArray1[i] === newArray2[k]) {
          index = newArray2.indexOf(newArray2[k]);
          newArray2.splice(index, 1);
          console.log("Testing slice condition!");
      }
  }
  }
  
  for (var i = 0; i < newArray1.length; i++) {
      for (var k = 0; k < newArray3.length; k++) {
        if (newArray1[i] === newArray3[k]) {
            index = newArray3.indexOf(newArray3[k]);
            newArray3.splice(index, 1);
            console.log("Testing slice condition!");
        }
      }
  }
    
  for (var i = 0; i < newArray2.length; i++) {
      for (var k = 0; k < newArray3.length; k++) {
          if (newArray2[i] === newArray3[i]) {
              index = newArray3.indexOf(newArray3[k]);
              newArray3.splice(index,1);
              console.log("Testing slice condition!");
          }
      }
  }   
        
  console.log("newArray1:" + newArray1);
  console.log("newArray2:" + newArray2);
  console.log("newArray3:" + newArray3);
  finalArray = newArray1.concat(newArray2, newArray3);
        
        
    }
    else if (arguments.length <= 4) {
    
    console.log("Testing else condition!");
  
  
  for (var i = 0; i < newArray1.length; i++) {
      for (var k = 0; k < newArray2.length; k++) {
        if (newArray1[i] === newArray2[k]) {
          index = newArray2.indexOf(newArray2[k]);
          newArray2.splice(index, 1);
          console.log("Testing slice condition!");
      }
  }
  }
  
  for (var i = 0; i < newArray1.length; i++) {
      for (var k = 0; k < newArray3.length; k++) {
        if (newArray1[i] === newArray3[k]) {
            index = newArray3.indexOf(newArray3[k]);
            newArray3.splice(index, 1);
            console.log("Testing slice condition!");
        }
      }
  }
    
  for (var i = 0; i < newArray2.length; i++) {
      for (var k = 0; k < newArray3.length; k++) {
          if (newArray2[i] === newArray3[i]) {
              index = newArray3.indexOf(newArray3[k]);
              newArray3.splice(index,1);
              console.log("Testing slice condition!");
          }
      }
  }
        
  for (var i = 0; i < newArray1.length; i++) {
      for (var k = 0; k < newArray4.length; k++) {
          if (newArray1[i] === newArray4[i]) {
              index = newArray4.indexOf(newArray4[k]);
              newArray4.splice(index,1);
              console.log("Testing slice condition!");
          }
      }
  }
        
   for (var i = 0; i < newArray2.length; i++) {
      for (var k = 0; k < newArray4.length; k++) {
          if (newArray2[i] === newArray4[i]) {
              index = newArray4.indexOf(newArray4[k]);
              newArray4.splice(index,1);
              console.log("Testing slice condition!");
          }
      }
  }
        
   for (var i = 0; i < newArray3.length; i++) {
      for (var k = 0; k < newArray4.length; k++) {
          if (newArray3[i] === newArray4[i]) {
              index = newArray4.indexOf(newArray4[k]);
              newArray4.splice(index,1);
              console.log("Testing slice condition!");
          }
      }
  }

  console.log("newArray1:" + newArray1);
  console.log("newArray2:" + newArray2);
  console.log("newArray3:" + newArray3);
  console.log("newArray4:" + newArray4);
  finalArray = newArray1.concat(newArray2, newArray3, newArray4);
}

  console.log("finalArray" + finalArray);
  return finalArray;
}


uniteUnique([1, 3, 2], [1, [5]], [2,[4]]);