
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
    var index = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === "" || arr[i] === undefined || arr[i] === NaN) {
        index[count] = arr.indexOf(arr[i]);
            count++;
    
        }
    }
    console.log(index);
    //arr.splice(index, 1);
    
  return arr;
}

bouncer([7, "ate", "", false, 9]);