function Sum(a, b) {
    return (a + b);
}

function Difference(a, b) {
    return (a - b);
}

function Multiplication(a, b) {
    return (a * b);
}

function Division(a, b) {
    if (b !== 0) {
        return (a / b)
    }
    return ('делить на 0 нельзя')
}


function inputValue1(value) {
    value = prompt("Введите первое число");
    if (((isNaN(value)===true) || (value === ''))) {
        alert("Должно быть числом");
        value = prompt("Введите еще раз первое число");
        return value
    }
    return value
}

function inputValue2(value) {
    value = prompt("Введите второе число");
    if (((isNaN(value)===true) || (value === ''))) {
        alert("Должно быть числом");
        value = prompt("Введите еще раз второе число");
        return value
    }
    return value
}

function inputOperator(value) {
    value = prompt("Введите простой оператор (+,-,/,*)");
    if ((value==="+")||(value==="-")||(value==="*")||(value==="/")) {
        return value;
    }
    alert('неверный оператор');
}



function Calc(x, y, operator) {
   x= inputValue1();
   y= inputValue2();
    operator=  inputOperator()
    console.log(x, y, operator)

        switch (operator) {
            case '+':
                alert(`${x}+${y}=${Sum(+x, +y)}`);
                break;
            case "-":
                alert(`${x}-${y}=${Difference(x, y)}`);
                break;
            case "*":
                alert(`${x}*${y}=${Multiplication(x, y)}`);
                break;
            case "/":
                alert(`${x}/${y}=${Division(x, y)}`);
                break;
        }

}

Calc();