function repeatStringNumTimes(str, num) {
  // repeat after me
    var arry = [];
    var index = 0;
    var strArry = "";
    var expression = /,/gi;
    
    
    while (num > index) {
    for(var i = 0; i < str.length; i++) {
        arry.push(str[i]);
    }
        index++;
    }
    
    strArry = arry.join();
    strArry = strArry.replace(expression, "");
    console.log(strArry);
    

    
  return strArry;
}

repeatStringNumTimes("abc", 3);