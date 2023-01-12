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

button.onclick=function (){
    console.log(input.value)
    input.value='';
}