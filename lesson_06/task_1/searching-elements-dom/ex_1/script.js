// 1. Таблица с `id="age-table"`.
const table = document.getElementById('age-table')
console.log(table)

// 2. Все label в этой таблице
const label = table.querySelector('label')
console.log(label)

// 3. Первый td в этой таблице
const td = table.querySelector('td')
console.log(td)


// 4. Форма с name="search"
const form = document.querySelector('form[name="search"]')
console.log(form)

// 5. Первый input в этой форме
const input = form.querySelector('input')
console.log(input)

// 6. Последний input в этой форме
const inputs = form.querySelectorAll('input')
const lastInput = inputs[inputs.length-1]
console.log(lastInput)