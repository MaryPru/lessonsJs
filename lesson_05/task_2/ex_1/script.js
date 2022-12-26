const setTimer = function(sec) {
    function t(){
        console.log(sec--);

        if(!sec)
            clearInterval(timer);
    }

    let timer = setInterval(t, 1000);
    return t
};

console.log(setTimer(10))