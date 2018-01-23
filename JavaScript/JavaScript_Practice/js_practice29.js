function equalTo(value) {
    return value !== false && value !== null && value !== 0 && value !== "" && value !== undefined && value !== NaN;
}



function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var arr2 = [];
  var index = 0;
    
  for (var i = 0; i <= arr.length; i++) {
      if (arr[i] === null) {
          arr[i] ="";
      }
  }
  console.log(arr);
  
    
   for (var i = 0; i < arr.length; i++) {
      if (Number.isNaN(arr[i])) {
          arr[i] = "";
      }
  }
  console.log(arr);
    arr2 = arr.filter(equalTo);
    
  console.log(arr2);
  
  

  return arr2;
}

bouncer([7, "ate", "", false, 9]);