function titleCase(str) {
  var array = [];
  var array2 = [];
  var str2 = " ";
  array = str.split(" ");
  for (var i = 0; i < array.length; i++) {
    array2[i] = array[i].replace(array[i][0],array[i][0].toUpperCase());
    
  }
  
  
   str2 = array2.join(" ");
  
   return str2;

}

titleCase("I'm a little tea pot");