function truncateString(str, num) {
  // Clear out that junk in your trunk
  var str2 = " ";
  if (str.length > num && num > 3) {
      num = num - 3;
    for (var i = 0; i < num; i++) { 
      str2 += str[i];
    }
      str2 += "...";
      return console.log(str2) && console.log(typeof(str2));
  }
  else if (str.length > num && num < 3) {
      for (var i = 0; i < num; i++) { 
      str2 += str[i];
    }
      str2 += "...";
      return console.log(str2 && console.log(typeof(str2)));
    }
  else
    {
      return console.log(str);
    }
}

truncateString("Absolutely Longer", 2);