let select = document.querySelector('#genres')

let selectedOption = select.options[select.selectedIndex];
console.log( selectedOption.text );

let newOption = new Option("Классика", "classic");
select.append(newOption);

newOption.selected = true;

console.log( select.options[select.selectedIndex].text);