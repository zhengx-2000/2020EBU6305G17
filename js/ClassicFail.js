var songNum = window.location.href.split("=")[1];
function retry() {
    window.location.href = "Classic.html?word=" + songNum;
}