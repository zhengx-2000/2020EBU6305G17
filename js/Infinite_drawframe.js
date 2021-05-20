//var game = document.getElementById("game");
//var gamectx = game.getContext("2d");
var countdown = document.getElementById("countdown");
var countdownctx = countdown.getContext("2d");
            
//drawPlayer(gamectx);
/*drawStairs(gamectx);
drawNotes(gamectx);*/

drawCountdown(countdownctx);

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
function drawCountdown(ctx,countnub1) {
    ctx.fillStyle = "#333";
    //ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    //ctx.font = "40px bold Arial";
    //ctx.fillText("Time:", 20, 46);
    ctx.strokeRect(70, 50, 227, 10);
    ctx.fillRect(70, 50, countnub1, 10);
}
