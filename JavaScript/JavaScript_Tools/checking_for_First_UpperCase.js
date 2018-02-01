

function myReplace(str, before, after) {
   
    var arry = [];
    var str2 = "";
    var str3 = "";
    var str4 = "";
    var expression = /,/gi;
    console.log("str[0]:" + str[0]);
    console.log("before[0]:" + before[0]);
    console.log("after[0]:" + after[0]);
    
    if (before[0].match(/^[A-Z]*$/)) {
        console.log("Condition is checked!");
        arry.push(after[0].toUpperCase());
        for (var i = 1; i < after.length; i++) {
            arry.push(after[i]);
        }
    
    
    
    console.log("Arry: " + arry);

    str2 = arry.join();
    str3 = str2.replace(expression, "");
    str4 = str.replace(before, str3);
    str = str4;
    
    }
    
    else {
        str2 = str.replace(before, after);
        str = str2;
    }
    
    
    
    console.log(str);
    return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");