
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  //bool = typeof bool;
  if(typeof(bool) === "boolean") {
  bool = new Boolean(bool);   // initial value of false
  bool = Boolean(true); 
  }
  
  else {
    bool = false;
  }
  return bool;
}
booWho([1, 2, 3]);