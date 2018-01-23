function chunkArrayInGroups(arr, size) {
  // Break it up.
    var arry2 = [];
    var arry3 = [];
    var count = 0;
    var increment = size;
    var index = arr.length/size;
    var num = 0;
    
    
    
    for (var i = 0; i <= index; i++) {
    arry2[i] = arr.slice(count,size);
    console.log("arry2["+i+"]:" + arry2[i]);
    count = size;
    size += increment; 
        console.log("size:" + size);
        console.log("arr.length:" + arr.length);
        console.log(arr.length - 1);
        if (size > (arr.length - 1)) {
            for (var i = size - increment; i < arr.length; i++) {
                arry3[num] = arr[i];
                num++;
                console.log("arr[i]:" + arr[i]);
            }
            i+= 100;
        }
    }
arry2.push(arry3);
    console.log(arry2);
  return arry2;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
