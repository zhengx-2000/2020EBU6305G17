function playbg(m) {
    var music = document.getElementById(m);
    if(music.paused) {
        music.play();
    }
    else {
        music.pause();
    }
}
