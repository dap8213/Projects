 function palindrome(str) {
  // Good luck!
  var lowerStr = " ";
  var str1 = " ";
  var str2 = " ";
  var array = [];
  var array2 = []; 
  var expression = /[.#_,|\/():-]/gi;
  var expression2 = /,/gi;
  var newStr = str.replace(expression ,"");
  var newStr2 = newStr.replace(/\s/g, "");;
    
  console.log(newStr2);
  lowerStr = newStr2.toLowerCase();
  array = lowerStr.split("");
  array2 = array.slice();
  array.reverse();
  str2 = array2.toString();
  str1 = array.toString();
  
  str2 = str2.replace(expression2,"");
  str1 = str1.replace(expression2,"");
  console.log(str2);
  console.log(str1);
  
  if (str2 === str1) {
      return true;
  }
    
  else {
      return false;
  }
  
  

}

palindrome("A man, a plan, a canal.Panama");
