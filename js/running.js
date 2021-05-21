function change(){
    document.getElementById('path0').style.animationPlayState = 'running';
    document.getElementById('path1').style.animationPlayState = 'running';
    document.getElementById('path2').style.animationPlayState = 'running';
    document.getElementById('path3').style.animationPlayState = 'running';
    document.getElementById('path4').style.animationPlayState = 'running';
    const url = ["images/player/1.png","images/player/2.png","images/player/3.png","images/player/4.png","images/player/5.png","images/player/6.png","images/player/7.png","images/player/8.png","images/player/9.png","images/player/10.png","images/player/11.png","images/player/12.png"]
    let sort = 1
    const timeout = 25 //在这调整移动速度（动画切换速率），越小越快
    new Promise(function(resolve, reject) {
        console.log(sort)
        if (sort<url.length-1){
        setTimeout(function () {
            document.getElementById("role").src = url[sort] //png 2
            console.log("sort is" + sort)
            resolve(sort + 1)
        }, timeout); // (*)
    }else{
            alert("refresh please")
        return 0;
    }
    }).then(function(result) { // (**)
        console.log("result is"+result)
        setTimeout(function () {
            console.log(url[result])
            document.getElementById("role").src = url[result] //png 3
            sort = sort+2
            console.log("sort is"+sort)

            return new Promise(function (resolve, reject){
                setTimeout(function () {
                    document.getElementById("role").src = url[sort] //png 4
                    console.log("sort is"+sort)
                    resolve(sort+1)
                }, timeout); // (*)
            }).then(function (result){
                console.log("result is"+result)
                setTimeout(function () {
                    console.log(url[result])
                    document.getElementById("role").src = url[result] //png 3
                    sort = sort + 2
                    console.log("sort is" + sort)
                    return new Promise(function (resolve, reject){
                        setTimeout(function () {
                            document.getElementById("role").src = url[sort] //png 2
                            console.log("sort is"+sort)

                            resolve(sort+1)
                        }, timeout); // (*)
                    }).then(function(result) {
                        console.log("result is"+result)
                        setTimeout(function () {
                            console.log(url[result])
                            document.getElementById("role").src = url[result] //png 3
                            sort = sort + 2
                            console.log("sort is" + sort)
                            return new Promise(function (resolve, reject){
                                setTimeout(function () {
                                    document.getElementById("role").src = url[sort] //png 2
                                    console.log("sort is"+sort)

                                    resolve(sort+1)
                                }, timeout); // (*)
                            }).then(function(result) {
                                console.log("result is" + result)
                                setTimeout(function () {
                                    console.log(url[result])
                                    document.getElementById("role").src = url[result] //png 3
                                    sort = sort + 2
                                    console.log("sort is" + sort)
                                    return new Promise(function (resolve, reject){
                                        setTimeout(function () {
                                            document.getElementById("role").src = url[sort] //png 2
                                            console.log("sort is"+sort)

                                            resolve(sort+1)
                                        }, timeout); // (*)
                                    }).then(function(result) {
                                        console.log("result is" + result)
                                        setTimeout(function () {
                                            console.log(url[result])
                                            document.getElementById("role").src = url[result] //png 3
                                            sort = sort + 2
                                            console.log("sort is" + sort)
                                            return setTimeout(function () {
                                                document.getElementById("role").src = url[sort] //png 2
                                                console.log("sort is"+sort+1)
                                                document.getElementById('path0').style.animationPlayState = 'paused';
                                                document.getElementById('path1').style.animationPlayState = 'paused';
                                                document.getElementById('path2').style.animationPlayState = 'paused';
                                                document.getElementById('path3').style.animationPlayState = 'paused';
                                                document.getElementById('path4').style.animationPlayState = 'paused';
                                            }, timeout);
                                        }, timeout)
                                    })
                                }, timeout);
                            })
                        },timeout);
                    })
                }, timeout);
            })
        }, timeout);
    });
}
