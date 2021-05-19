var currentNote = 0;
var state = -1;//-1: initialize; 0: wrong key; 1: correct key; 2: game end(no more key)
var song = "";
var heartid = 3;
var currentSong = 0;
var countnub = 0;
var scorfinal = 0;
var songnumbget = 0;
infiniteSetup(currentSong);
function infiniteSetup(id) {
    document.getElementById("middle").innerHTML = "~~~" + songNameList[id] + "~~~";
    song = songList[id];
}
function checkstate(state) {
    switch (state) {
        case 0://wrong key
            if(heartid > 1) {
                document.getElementById("heart"+heartid).src = "./images/heart_empty.png";
                heartid = heartid - 1;
            }
            else {
                alert("Game loss");
                songnumbget = countnub*100/227;
                if(songnumbget>0 && songnumbget<=20){
                    scorfinal=20;
                }
                if(songnumbget>20 && songnumbget<=60){
                    scorfinal=40;
                }
                if(songnumbget>60 && songnumberget<=80){
                    scorfinal=60;
                }
                if(songnumbget>80 && songnumberget<=100){
                    scorfinal=90;
                }
                window.location.href = "InfinitScore.html?score=" + scorfinal;
                heartid = 3;
                currentSong = 0;
            }
            break;
        case 1://correct key
            countnub = countnub + 1 ;
            drawCountdown(countdownctx,countnub);
            change();
            break;
        case 2://game end
            change();
            alert("Game compelete!");
            currentSong = currentSong + 1;
            if(currentSong < 7) {
                infiniteSetup(currentSong);
            }
            else {
                alert("Game win!");
                scorfinal = 100;
                window.location.href = "InfinitScore.html?score=" + scorfinal;
                currentSong = 0;
            }
            currentNote = 0;
            state = -1;
            break;
        default:
            break;
    }
}
function check(id) {
    if(id.toString() == song.charAt(currentNote)) {
        //alert("1 + " + currentNote);
        state = 1;
        currentNote = currentNote + 1;
        if(currentNote == song.length) {
            state = 2;
            //alert("2 + " + currentNote);
        }
    }
    else {
        //alert("0 + " + currentNote);
        state = 0;
    }
}