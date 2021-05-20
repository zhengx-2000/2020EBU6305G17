var currentNote = 0;
var state = -1;//-1: initialize; 0: wrong key; 1: correct key; 2: game end(no more key)
var songnum = window.location.href.split("=")[1];
if(songnum < 0 || songnum > 6) {
    alert("Not valid song number! Please try again!");
    window.location.href='Songlist.html';
}
var song = songList[parseInt(songnum)-1];
//alert(song);

document.getElementById("middle").innerHTML = "~~~" + songNameList[parseInt(songnum)-1] + "~~~";
document.onkeypress = keyboard;

function keyboard(e) {
    var e = e || window.event;
    if(e.keyCode >= 49 && e.keyCode <= 55) {
        check(e.keyCode-48);
        checkstate(state);
    }
}

function checkstate(state) {
    switch(state) {
        case 0:
            break;
        case 1:
            change();
            counter();
            reset();
            break;
        case 2:
            change();
            //alert("Game win!");
            currentNote = 0;
            state = -1;
            window.location.href='ClassicWin.html';
            break;
        default:
            break;
    }
}
function check(id) {
    if(id.toString() == song.charAt(currentNote)) {
        //alert("1 + " + current);
        state = 1;
        currentNote = currentNote + 1;
        if(currentNote == song.length) {
            state = 2;
            //alert("2 + " + current);
        }
    }
    else {
        //alert("0 + " + current);
        state = 0;
    }
}
