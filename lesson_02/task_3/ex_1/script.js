function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function CreateArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = [];

        for (let j = 0; j < size; j++) {
            arr[i][j] = getRandomValue(-9, 9);
        }
    }
    return arr;
}

console.log(CreateArray(5));
