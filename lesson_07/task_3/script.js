let form = document.createElement('form');
form.setAttribute('action', 'error.html');
document.body.append(form);

let input = document.createElement('input');
input.setAttribute('type', 'text');

let button = document.createElement('button');
button.setAttribute('type', 'submit');
button.innerText = ('Вывести в консоль');

form.append(input);
form.append(button);

form.onclick = function (event) {
    event.preventDefault();
}

let chat = document.createElement('div');
chat.setAttribute('id', 'chat');
document.body.append(chat);

button.onclick = function () {
    let div = document.createElement('div');
    chat.append(div);
    div.innerText = (input.value);
    input.value = '';
}