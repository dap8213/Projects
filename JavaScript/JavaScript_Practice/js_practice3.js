function Start() {
    var loopExit = true;
    while(loopExit) {
    var answer = prompt("Would you like English or Spanish?");
    if (answer === "Spanish") {
        alert("Como estas?");
        loopExit = false;
    }   
    
    else if (answer === "English") {
        alert("How is it going?");
        loopExit = false;
    }
    
    else {
        alert("Invalid Entry!!!, Please try again!");
    } 
  }
    alert("That's nice to hear!!");
}

Start();
