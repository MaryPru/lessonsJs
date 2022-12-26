https://learn.javascript.ru/bind
Что выведет функция?

function f() {
alert( this ); // ?
}

let user = {
g: f.bind(null)
};

user.g();