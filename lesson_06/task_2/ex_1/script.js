let input = document.createElement("input");
input.type = "text";
input.placeholder="Введите текст";
document.body.appendChild(input);

let BUTTON_ELEMENT = document.createElement("button");
BUTTON_ELEMENT.textContent="Получить введенные данные"
document.body.appendChild(BUTTON_ELEMENT);

BUTTON_ELEMENT.addEventListener('click',(e) => {
    e.preventDefault();
    let value = input.value;
    console.log('Вы ввели:', value)
})
