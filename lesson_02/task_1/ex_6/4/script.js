function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

let date = new Date(2022, 11, 20);

console.log( getDateAgo(date, 1) );
console.log( getDateAgo(date, 2) );
console.log( getDateAgo(date, 365) );