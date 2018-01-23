function truncateString(str, num) {
  // Clear out that junk in your trunk
  var str2 = " ";
  if (3 > num) {
  str2 = str.substr(0, 1) + "...";
  console.log(str2);
  return str2;
  }
  else if (str.length >= num) {
      return str;
  }
  else {
      str2 = str.substr(0, num -3) + "...";
      return str2;
          
  }
}

truncateString("A-", 1);