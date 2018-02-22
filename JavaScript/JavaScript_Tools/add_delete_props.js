
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  var array = [];
  
  console.log("collection.length:" + collection.length);
  // Had to use bracket notation!!!
  if (value === "") {
    delete collection[2548][prop];
  }
  else if (!collection[id].hasOwnProperty(prop) && prop === "tracks" && value !=="") {
      console.log("Condition is hit!!");
      array.push(value);
      collection[id][prop] = array;
  }
  else if (prop === "tracks" && value !== "") {
    collection[id][prop].push(value);
    
  }
  
  else if (!id.hasOwnProperty(prop)) {
      collection[id][prop] = value;
  }
  
  console.log("collection:" + collection[5439][prop]);
  console.log("array:" + array);
  return collection;
}

// Alter values below to test your code
updateRecords(2468, "tracks", "Free");