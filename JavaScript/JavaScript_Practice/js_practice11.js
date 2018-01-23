
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop) {
// Only change code below this line
    var checkName = false;
    var propertyCheck = false;

    var index;
    var value
    
   for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === firstName) {
            checkName = true;
            index = i;
        
        }
   }
   if(contacts[index].hasOwnProperty(prop)) {
        propertyCheck = true;
        value = contacts[index][prop];
        }
    
       
   if(checkName === true && propertyCheck === true) {
        return value;
}
    
    else if(checkName === false) {
            return "No such Contact";
        }
       
    else {
           return "No such Property";
       }
       
    }

  

      
    
    
// Only change code above this line
  

// Only change code above this line


// Change these values to test your function
lookUpProfile("Kristian", "likes");