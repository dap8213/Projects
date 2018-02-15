
function binaryAgent(str) {
    var strToNum = [];
    var strToNum2 = [];
    var strToArr = str.split(' ');
    var str2 = "";
    var str3 = "";
    var expression1 = /,/gi;
    
    
    console.log("strToArr:" + strToArr);
    for (var i = 0; i < strToArr.length; i++) {
        strToNum.push(parseInt(strToArr[i], 2));
    }
   
    
    console.log("strToNum:" + strToNum);
    for (var i = 0; i < strToNum.length; i++) {
        strToNum2.push(String.fromCharCode(strToNum[i]));
    
}
    console.log("strToNum2:" + strToNum2);
    str2 = strToNum2.join();
    str3 = str2.replace(expression1, "");
    
    console.log("str3:" + str3);
  return str3;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
