function randomInteger(min, max) {
    let value = Math.round(Math.random() * 10);

    return Math.round(value  * (max - min) / 10) + min;
}
console.log(randomInteger(1, 5));