let user = prompt("Кто там?", '');

if (user === 'Админ') {

    let password = prompt('Пароль?', '');

    if (password === 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (password === '' || password === null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }

} else if (user === '' || user === null) {
    alert( 'Отменено' );
} else {
    alert( "Я вас не знаю" );
}