function mutation(arr) {
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    arr1 = arr[0].toLowerCase();
    arr2 = arr[1].toLowerCase();
    console.log(arr1);
    console.log(arr2);
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1[i].length; j++) {
            arr3.push(arr1[i][j]);
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr2[i].length; j++) {
            arr4.push(arr2[i][j]);
        }
    }
    
    console.log("arr1:"+ arr1);
    console.log("arr4:" + arr4);
    console.log("arr4.length:" + arr4.length);
    for (var i = 0; i < arr4.length;i++) {
            console.log(arr4[i]);
            if (!arr1.includes(arr4[i])){
                
            console.log(false);
            return false;
    }
    }
    
        console.log(true);
        return true;
        
         }
         


    



mutation(["hello", "Hello"]);