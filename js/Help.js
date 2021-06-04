var countnum = 1;
var countmax = 9;
function count(i) {
    switch (i) {
        case 0: //back
            if(countnum == 1)
                break;
            else {
                countnum--;
                document.getElementById("picture").src = "./images/help/" + countnum + ".png";
            }
            break;
        case 1: //next
            if(countnum == countmax)
                break;
            else {
                countnum++;
                document.getElementById("picture").src = "./images/help/" + countnum + ".png";
            }
            break;
        default:
            break;
    }
}