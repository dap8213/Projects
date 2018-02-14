
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var array2 = [];
  var flattened = arr.reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
  for (var i = 0; i < flattened.length; i++) {
    if (Array.isArray(flattened[i])) {
      for (var j = 0; j < flattened[i].length; j++) {
        for (var k = 0; k < flattened[i][j].length; k++) {
      array2.push(flattened[i][j][k]);
        }
      }
    }
    else {
      array2.push(flattened[i]);
    }
  }

  console.log("array2:" + array2);
  
  return array2;
}

steamrollArray([1, [2], [3, [[4]]]]);