var current = 0;
var state = -1;//-1: initialize; 0: wrong key; 1: correct key; 2: game end(no more key)
var song = "";
setsong(littlestar);
function setsong(s) {
    song = s;
}
function checkstate(state) {
    if(state == 1) {
        change();
    }
    if(state == 2) {
        change();
        alert("Game win!");
    }
}
function check(id) {
    if(id.toString() == song.charAt(current)) {
        alert("1 + " + current);
        state = 1;
        current = current + 1;
        if(current == song.length) {
            state = 2;
            alert("2 + " + current);
        }
    }
    else {
        alert("0 + " + current);
        state = 0;
    }
}