var game = document.getElementById("game");
var gamectx = game.getContext("2d");
var countdown = document.getElementById("countdown");
var countdownctx = countdown.getContext("2d");
var time = 2000;
var interval = 20;
var progressBarlength = 221;
var pass = 0;
var record = progressBarlength*interval/time ;

drawStairs(gamectx);
drawNotes(gamectx);

drawCountdown(countdownctx);

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

function drawCountdown(ctx) {
    ctx.fillStyle = "#333";
    //ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "40px bold Arial";
    ctx.fillText("Time:", 20, 46);
    ctx.strokeRect(140, 32, 221, 27);
    // console.log(ctx);
    // ctx.fillRect(140, 32, total, 27);
    setInterval(counter,interval);
}
function counter(){
    countdownctx.fillRect(140,32,221,27);
    countdownctx.clearRect(140,32,221,27);
    countdownctx.fillRect(140,32,progressBarlength,27);
    if(progressBarlength-record>0){
        progressBarlength = progressBarlength - record;
    }else{
        progressBarlength = 0;
        window.location.href="ClassicFail.html" ; //时间结束到失败页面
    }
    
}
function reset() {
    progressBarlength = 221;
    counter();
}