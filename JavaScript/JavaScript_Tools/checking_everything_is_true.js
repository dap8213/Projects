
function truthCheck(collection, pre) {
  // Is everyone being true?
  
function checkingAllValues(arrayValues) {
    return arrayValues.hasOwnProperty(pre) && Boolean(arrayValues[pre]);
}



var values = collection.every(checkingAllValues);
    
    console.log("values:" + values);
    return values;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


