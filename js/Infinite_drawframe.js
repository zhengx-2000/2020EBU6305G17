//var game = document.getElementById("game");
//var gamectx = game.getContext("2d");
var countdown = document.getElementById("countdown");
var countdownctx = countdown.getContext("2d");
var countdownFactor = 1;

var w = window.innerWidth;
            
//drawPlayer(gamectx);
/*drawStairs(gamectx);
drawNotes(gamectx);*/

adjustCountdownLength();
drawCountdown(countdownctx, countnub);

/*function drawPlayer(ctx) {
    ctx.fillStyle = "#333";
}*/
/*
function drawStairs(ctx) {
    ctx.fillStyle = "#666";
    for(var i=1; i<=12; i++) {
        ctx.strokeRect((3*i-2)*10, 0, 20, 15);
        if(i<=5) {
            ctx.fillRect((3*i-2)*10, 0, 20, 15);
        }
    }
}

function drawNotes(ctx) {
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "16px bold Arial";
    for(var i=1; i<=12; i++) {
        ctx.fillText("5", i*30-10, 8.5);
    }
}
*/
function drawCountdown(ctx, countnub1) {
    ctx.fillStyle = "#333";
    //ctx.textAlign = "center";
    //ctx.textBaseline = "middle";
    //ctx.font = "40px bold Arial";
    //ctx.fillText("Time:", 20, 46);
    //ctx.strokeRect(0, 70, 227*countdownFactor, 20);
    //ctx.fillRect(0, 70, countnub1*countdownFactor, 20);
    ctx.strokeRect(0, 50, 227*countdownFactor, 20);
    ctx.fillRect(0, 50, countnub1*countdownFactor, 20);
}

window.onresize = changeScreen;
function changeScreen(){
    adjustCountdownLength();
}

/*window.onload = function() {
    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    var box = document.getElementById("countdown");
    box.appendChild(canvas);

    document.getElementById("canvas").height = 89;
    var w = window.innerWidth;
    if(w<600)
        document.getElementById("canvas").width = 230;
    if(w>=600&&w<900)
        document.getElementById("canvas").width = 460;
    if(w>=900&&w<1200)
        document.getElementById("canvas").width = 690;
    if(w>1200)
        document.getElementById("canvas").width = 920;
}*/

function adjustCountdownLength() {
    w = window.innerWidth;
    console.log("w:" + w);
    if(w < 600) {
        countdownFactor = 1;
        countdown = document.getElementById("countdown");
        countdown.width = 230;
        countdownctx = countdown.getContext("2d");
        countdownctx.clearRect(0,0,countdown.width,countdown.height);
        //countdownctx.strokeRect(0, 50, 400, 20);
        drawCountdown(countdownctx,countnub);
    }
    if(w >= 600 && w < 900) {
        countdownFactor = 2;
        countdown = document.getElementById("countdown");
        countdown.width = 460;
        countdownctx = countdown.getContext("2d");
        countdownctx.clearRect(0,0,countdown.width,countdown.height);
        //countdownctx.strokeRect(0, 50, 400, 20);
        drawCountdown(countdownctx,countnub);
    }
    if(w >= 900 && w < 1200) {
        countdownFactor = 3;
        countdown = document.getElementById("countdown");
        countdown.width = 690;
        countdownctx = countdown.getContext("2d");
        countdownctx.clearRect(0,0,countdown.width,countdown.height);
        //countdownctx.strokeRect(0, 50, 400, 20);
        drawCountdown(countdownctx,countnub);
    }
    if(w >= 1200) {
        countdownFactor = 4;
        countdown = document.getElementById("countdown");
        countdown.width = 920;
        countdownctx = countdown.getContext("2d");
        countdownctx.clearRect(0,0,countdown.width,countdown.height);
        //countdownctx.strokeRect(0, 50, 400, 20);
        drawCountdown(countdownctx,countnub);
    }
}