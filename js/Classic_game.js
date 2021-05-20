var currentNote = 0;
var state = -1;//-1: initialize; 0: wrong key; 1: correct key; 2: game end(no more key)
var songnum = window.location.href.split("=")[1];
var songnumbget = 0;
var lastnote = 0;
var currentNote1 = 0;
var currentNote2 = 0;
var currentNote3 = 0;
var currentNote4 = 0;
if(songnum < 0 || songnum > 6) {
    alert("Not valid song number! Please try again!");
    window.location.href='Songlist.html';
}
var song = songList[parseInt(songnum)-1];
//alert(song);

document.getElementById("middle").innerHTML = "~~~" + songNameList[parseInt(songnum)-1] + "~~~";
document.onkeypress = keyboard;
nextnumb();

function keyboard(e) {
    var e = e || window.event;
    if(e.keyCode >= 49 && e.keyCode <= 55) {
        if(e.keyCode == 49)
            document.getElementById('do').play();
        if(e.keyCode == 50)
            document.getElementById('ri').play();
        if(e.keyCode == 51)
            document.getElementById('mi').play();
        if(e.keyCode == 52)
            document.getElementById('fa').play();
        if(e.keyCode == 53)
            document.getElementById('so').play();
        if(e.keyCode == 54)
            document.getElementById('la').play();
        if(e.keyCode == 55)
            document.getElementById('xi').play();
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
            nextnumb();
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
        nextnumb();
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
function nextnumb(){
    lastnote = currentNote + 2;
    currentNote1 = currentNote + 1;
    currentNote2 = currentNote1 + 1;
    currentNote3 = currentNote2 + 1;
    if (lastnote == song.length){
        document.getElementById("keynumb4").innerHTML = ""
    }
    if(lastnote == song.length+1){
        document.getElementById("keynumb3").innerHTML = ""
    }
    if(lastnote == song.length+2){
        document.getElementById("keynumb2").innerHTML = ""
    }
    if(lastnote == song.length+3){
        document.getElementById("keynumb1").innerHTML = ""
    }
    document.getElementById("keynumb1").innerHTML = song.charAt(currentNote)
    document.getElementById("keynumb2").innerHTML = song.charAt(currentNote1)
    document.getElementById("keynumb3").innerHTML = song.charAt(currentNote2)
    document.getElementById("keynumb4").innerHTML = song.charAt(currentNote3)
}
