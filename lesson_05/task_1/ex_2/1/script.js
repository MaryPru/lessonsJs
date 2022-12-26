function printNumbersInterval(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        console.log('printNumbersInterval');
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;

    }, 1000);
}


printNumbersInterval(5, 10);

function printNumbersTimeout(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log('printNumbersTimeout');
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;

    }, 7000);
}


printNumbersTimeout(11, 15);