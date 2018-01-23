function writeMessage(string) {
    var i = 0, intervalId;
    intervalId = window.setInterval(function() {
        message.innerHTML += string.charAt(i++);
        if (i > string.length) 
            window.clearInterval(intervalId);
    }, 100); 
}

writeMessage("Hello world");