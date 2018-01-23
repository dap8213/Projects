function findLongestWord(str) {
  var array = [];
  array = str.split(" ");
  array.sort(function(a, b) {
      console.log(a.length - b.length);
  });
    console.log(array);  
}
      
  



findLongestWord("The quick brown fox jumped over the lazy dog");