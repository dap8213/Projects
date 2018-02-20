
function addTogether(x) {
  console.log("arguments.length: " + arguments.length);
  console.log("arguments.toString():" + typeof(arguments.toString()));
  console.log("typeof(arguments[0]):" + typeof(arguments[0]));
  console.log("arguments:" + arguments);
    
    
  if (arguments.length > 1) {
          // Checking if an argument is a number!
          if (arguments[0] === parseInt(arguments[0], 10) &&
              arguments[1] === parseInt(arguments[1], 10) &&
             !Array.isArray(arguments[0]) && !Array.isArray(arguments[1])) {
              var x = arguments[0];
              var y = arguments[1];
      
              return  x + y;
            
              
          }
          else {
            return undefined;
    
      }
  }
    
    
  else {
      for (var i = 0; i < arguments.length; i++) {
  
    // To check if an argument is a string!
  if (arguments[i] instanceof String || typeof arguments[i] === "string"){
    console.log("This condition was hit!");
    return undefined;
    
  }
  
  else {
    return function addTwo(y) {
        // Checking if argument is an array!!
      if (!Array.isArray(y)) {
         return x + y;
      }
      else {
        return undefined;
      }
       };
  }   
  }
  
} 
}
      
  


addTogether(2, "3");