Есть форма. Изменять html формы запрещено.

<form action="send.php" novalidate>
    <fieldset>
        <label for="name">Ваше имя*</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="lastname">Ваша Фамилия*</label>
        <input type="text" id="lastname" name="lastname" required>
        <br>
        <label for="age">Ваш возраст</label>
        <input type="text" id="age" name="age" required>
    </fieldset>
    <br>
    <fieldset>
        <label for="message">Сообщение</label>
        <br>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
    </fieldset>
    <br>
    <button>Отправить</button>
</form>
<style>
    form {
        width: 400px;
        margin: 0 auto;
    }
    label {
        display: inline-block;
        width: 150px;
    }

    textarea {
        width: 100%;
    }
</style>


Задача сделать ее обработку с валидацией через js
Правила валидации

Поле
Правило
name
Обязательное
lastname
Обязательное
age
Обязательное, на ввод принимает только числа
message
Обязательно, минимальная длина сообщения 15 символов.


Если все поля корректно заполнены - выводить в консоль значения полей в формате json, выводить сообщение пользователю “Спасибо ФИО, Ваше сообщение принято!” и очищать форму.
