function Birthday() {
    let birthday = prompt('введите дату рождения в формате “ДД.ММ.ГГ.”', '');

    let birtdayDate = birthday.split('.'),
        year = birtdayDate [2],
        month = parseInt(birtdayDate [1] - 1),
        date = parseInt(birtdayDate [0]);

    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let yearNow = today.getFullYear();
    let age = parseInt(yearNow - year - 1900);
    let nextDate = new Date(yearNow, month, date);
    if (nextDate < today) nextDate.setFullYear(today.getFullYear() + 1);
    console.log(nextDate);

    let diff = Math.round((today.getTime() - nextDate.getTime()) / (24 * 60 * 60 * 1000));

    if (diff === 0) {
        alert(`Сднем рождения! и вам ${age}лет`);
    } else {
        alert(`До дня рождения осталось ${diff} дней  и вам будет ${age}лет`);
    }
}

Birthday()
