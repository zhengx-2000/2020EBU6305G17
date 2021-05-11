// get ul
var songNum = 1
document.querySelector('ul').addEventListener('scroll', ajacs(300))
function ajacs(times) {
    var time = null
    return function () {
        if (time !== null) {
            clearTimeout(time);
        }
        /*get the height of the scroll*/
        let scrollTop = this.scrollTop
        time = setTimeout(() => {
            return ajas(scrollTop)
        }, times);
    }
}

function ajas(scrollTop) {
  
    var list = scrollTop / 60 + 1
    console.log('select element' + list);
    songNum = Math.floor(list)
}

function change(content){
    let state = content
    if(state == 1){
        document.getElementById("stop").style = "background:url(./images/play.png);background-size:contain;float: right;width: 30px;height: 30px; margin-right:10px";
        document.getElementById("stop").value = "0"
    }else{
        document.getElementById("stop").style = "background:url(./images/stop.png);background-size:contain;float: right;width: 30px;height: 30px; margin-right:10px";
        document.getElementById("stop").value = "1"
    }
}
function redirection(){
    // console.log("result is:"+ songNum)
    // console.log("./test"+songNum+".html")
    window.open("test"+songNum+".html")
    // window.location.assign("./test"+songNum+".html")
}
    