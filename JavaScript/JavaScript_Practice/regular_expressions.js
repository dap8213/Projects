function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
    var str2 = " ";
    var str3 = " ";
    var arr = [];
    var arr2 = [];
    var expression = /,/gi;
    
    for (var i = 0; i < target.length; i++) {
        arr[i] = str[(str.length - 1) - i];
    }
    arr.reverse();
    
    
    str2 = arr.join();
    str3 = str2.replace(expression, "");
     
    if (str3 === target) {
        
  return true;
}
    else {
        return false;
    }

confirmEnding("He has to give me a new name", "name");