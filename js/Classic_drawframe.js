var game = document.getElementById("game");
var gamectx = game.getContext("2d");
var countdown = document.getElementById("countdown");
var countdownctx = countdown.getContext("2d");
var note = document.getElementById("note");
var notectx = note.getContext("2d");
            
drawStairs(gamectx);
drawNotes(gamectx);

drawCountdown(countdownctx);

drawBlock(notectx);
drawContain(notectx);
drawNumber(notectx);

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
    ctx.fillRect(140, 32, 100, 27);
}

function drawBlock(ctx) {
    ctx.fillStyle = "#333";
    for(var i=1; i<8; i++) {
        ctx.strokeRect((2*i-1)*23.7+7, 10, 23.7, 151);
    }
}

function drawContain(ctx) {
    ctx.fillStyle = "#EEE";
    for(var i=1; i<8; i++) {
        ctx.fillRect((2*i-1)*23.7+7, 10, 23.7, 151);
    }
}

function drawNumber(ctx) {
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "18px bold Arial";
    for(var i=1; i<8; i++) {
        ctx.fillText(i.toString(), (2*i-0.5)*23.7+7, 85.5);
    }
}
