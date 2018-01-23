// Variable Declarations
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var score = 0;
var health = 100;
var hunger = 100;
var tireness = 0;

function drawHead() {
    ctx.beginPath();
    ctx.arc(290, 320, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBody() {
    ctx.beginPath();
    ctx.rect(285, 329, 10, 45);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}



function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = '#0095DD';
    ctx.fillText("Score: " +score, 8, 20);
}

function drawHealth() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Health:  " + health, canvas.width-90, 20);
}

function drawHunger() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Hunger: " +hunger, canvas.width-90, 40);
}

function drawTireness() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Tireness: " +tireness, canvas.width-90, 60);
}

function drawLeftLeg() {
    ctx.beginPath();
    ctx.rotate(0.50);
    ctx.rect(428, 185, 10, 35);
     
    
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawRightLeg() {
    ctx.beginPath();
    ctx.rotate(40*Math.PI/20);
    ctx.rect(437, 185, 31, 10);
     
    
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}




function play(){
    drawHead();
    drawBody();
    drawScore();
    drawHealth();
    drawHunger();
    drawTireness();
    drawLeftLeg();
    drawRightLeg();
}

play();
