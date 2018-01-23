    // JavaScript code goes here
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    // Sqaure
    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
    
    // Circle
    ctx.beginPath();
    ctx.arc(240, 160, 20, 0, Math.PI*2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();

    // Empty Rectangle with no filled color
    ctx.beginPath();
    ctx.rect(160, 10, 100, 40);
    ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
    ctx.stroke();
    ctx.closePath();