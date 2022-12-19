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

function Calc(x, y, operator) {
    x = prompt("Введите первое число");
    y = prompt("Введите второе число");
    operator = prompt("Введите простой оператор (+,-,/,*)");
    if ((x !== '') && (y !== "")) {
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

            default:
                alert("введите значения");
        }
    }
    alert("введите значения");
}

Calc();