//var game = document.getElementById("game");
//var gamectx = game.getContext("2d");
var countdown = document.getElementById("countdown");
var countdownctx = countdown.getContext("2d");
var countdownFactor = 1;

var w = window.innerWidth;
            
adjustCountdownLength();
drawCountdown(countdownctx, countnub);

function drawCountdown(ctx, countnub1) {
    ctx.fillStyle = "#333";
    ctx.strokeRect(0, 50, 227*countdownFactor, 20);
    ctx.fillRect(0, 50, countnub1*countdownFactor, 20);
}

window.onresize = changeScreen;
function changeScreen(){
    adjustCountdownLength();
}

function adjustCountdownLength() {
    w = window.innerWidth;
    console.log("w:" + w);
    if(w < 600) {
        countdownFactor = 1;
        countdown = document.getElementById("countdown");
        countdown.width = 230;
        countdownctx = countdown.getContext("2d");
        countdownctx.clearRect(0,0,countdown.width,countdown.height);
        drawCountdown(countdownctx,countnub);
    }
    if(w >= 600 && w < 900) {
        countdownFactor = 2;
        countdown = document.getElementById("countdown");
        countdown.width = 460;
        countdownctx = countdown.getContext("2d");
        countdownctx.clearRect(0,0,countdown.width,countdown.height);
        drawCountdown(countdownctx,countnub);
    }
    if(w >= 900 && w < 1200) {
        countdownFactor = 3;
        countdown = document.getElementById("countdown");
        countdown.width = 690;
        countdownctx = countdown.getContext("2d");
        countdownctx.clearRect(0,0,countdown.width,countdown.height);
        drawCountdown(countdownctx,countnub);
    }
    if(w >= 1200) {
        countdownFactor = 4;
        countdown = document.getElementById("countdown");
        countdown.width = 920;
        countdownctx = countdown.getContext("2d");
        countdownctx.clearRect(0,0,countdown.width,countdown.height);
        drawCountdown(countdownctx,countnub);
    }
}

function pause() {
    document.getElementById('path0').style.animationPlayState = 'paused';
    document.getElementById('path1').style.animationPlayState = 'paused';
    document.getElementById('path2').style.animationPlayState = 'paused';
    document.getElementById('path3').style.animationPlayState = 'paused';
    document.getElementById('path4').style.animationPlayState = 'paused';
}