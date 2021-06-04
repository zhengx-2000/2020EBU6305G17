//var game = document.getElementById("game");
//var gamectx = game.getContext("2d");
var countdown = document.getElementById("countdown");
var countdownctx = countdown.getContext("2d");
var pauseStatus = 0 
var time = 4000;
var interval = 20;
var progressBarlength = 221;
var pass = 0;
var record = progressBarlength*interval/time ;
let t = null; 

drawCountdown(countdownctx);

function drawCountdown(ctx) {
    ctx.fillStyle = "#333";
    //ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "30px bold Arial";
    ctx.fillText("Time:", 20, 46);
    ctx.strokeRect(140, 32, 221, 27);
    // console.log(ctx);
    // ctx.fillRect(140, 32, total, 27);
    t = setInterval(counter,interval);
}

function counter(){
    countdownctx.fillRect(140,32,221,27);
    countdownctx.clearRect(140,32,221,27);
    countdownctx.fillRect(140,32,progressBarlength,27);
    if(progressBarlength-record>0){
        progressBarlength = progressBarlength - record;
    }else{
        progressBarlength = 0;
        window.location.href="ClassicFail.html?word=" + songnum ;
    }
    
}

function reset() {
    progressBarlength = 221;
    counter();
}
// pause the game
function pause() {
    // 如果当前在倒计时则清空定时器暂停，否则继续倒计时
    if (t) {
        clearInterval(t);
        document.getElementById('pause').style.backgroundImage = "url(./images/play.png)";
        t = null;
        document.getElementById('middle').innerHTML = 'Paused';
        document.getElementById('path0').style.animationPlayState = 'paused';
        document.getElementById('path1').style.animationPlayState = 'paused';
        document.getElementById('path2').style.animationPlayState = 'paused';
        document.getElementById('path3').style.animationPlayState = 'paused';
        document.getElementById('path4').style.animationPlayState = 'paused';
    } else {
        drawCountdown(countdownctx);
        document.getElementById('middle').innerHTML = "~~~" + songNameList[parseInt(songnum)-1] + "~~~";
        document.getElementById('pause').style.backgroundImage = "url(./images/pause.png)";
    }
    if(pauseStatus == 0){
        pauseStatus = 1
        for (let index = 1; index <= 7; index++) {
            console.log('here')
            document.getElementById(index).disabled = 'disabled'
        }
    }else{
        pauseStatus = 0
        for (let index = 1; index <= 7; index++) {
            document.getElementById(index).disabled = ''
        }
        console.log('ok')
    } 
}
