function findLongestWord(str) {
  var array = [];
  array = str.split(" ");
  array.sort(function(a, b) {
      return a.length - b.length;
  });
      console.log(array[array.length-1]);
}
      
  



findLongestWord("The quick brown fox jumped over the lazy dog");