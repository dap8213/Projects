
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var index1 = 0;
  
  var index = [];
  var array = [];
  var str2 = "";
  var str3 = "";
  var str4 = "";
  var str5 = "";
    
  // Checking for white spaces!
  var expression1 = /\s/gi;
  // Checking for commas!
  var expression2 = /,/gi;
  // Checking for underscores!
  var expression3 = /_/gi;
  // Checking for Uppercase!
  var expression4 = /[A-Z]/gi;
    
    if (str.indexOf(' ') >= 0 && expression4.test(str)) {
         for (var i = 0; i < str.length; i++) {
         array.push(str[i]);
  }
        console.log("array:" + array);
        /*
        for (var i = 1; i < array.length; i++) {
        if (array[i] === array[i].toUpperCase()) {
        
        index1 = i;
        console.log("index1:" + index1);
        break;
        
  }
      
  }
  */
        //array.splice(index1, 0, "-");
        str2 = array.join();
        console.log("str2:" + str2);
        str3 = str2.replace(expression1, "-");
        console.log("str3:" + str3);
        str4 = str3.toLowerCase();
        str5 = str4.replace(expression2, "");
        
        
        console.log("str5:" + str5);
        return str5;
    }
    
    
    // Checking if the string has one spaces!
    else if (str.indexOf(' ') >= 0) {
    str2 = str.toLowerCase();
    str3 = str2.replace(expression1, "-");
    console.log("str3:" + str3);
    return str3;
       
       
   }
    
   else if (str.includes("_")) {
    str2 = str.toLowerCase();
    str3 = str2.replace(expression3, "-");
    console.log("str3:" + str3);
    return str3;
   }
    
    else {
        
    
    for (var i = 0; i < str.length; i++) {
      array.push(str[i]);
  }

  console.log("array:"+ array);
    
      
  for (var i = 1; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
        
        index.push(i);
        console.log("index:" + index);
        console.log("array[i]:" + array[i]);
  }
      
  }
        
  for (var i = 1; i < index.length; i++) {
      index[i] += 1;
      
  }
        index[2] += 1;
       console.log("index:" + index);
  for (var i= 0; i < index.length; i++) {
        array.splice(index[i], 0, "-");
        
  }
    console.log("array" + array);
        
    str2 = array.join();
    str3 = str2.replace(expression2, "");
    str4 = str3.toLowerCase();
    console.log("str4:" + str4);
  return str4;
    }
  
  
  
}

spinalCase("Teletubbies say Eh-oh");