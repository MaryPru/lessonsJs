
let field= document.querySelector('#field')
let coords = field.getBoundingClientRect();
let leftTop = [coords.left, coords.top];
let bottomRight = [coords.right, coords.bottom];

let inLeft = [coords.left + field.clientLeft, coords.top + field.clientTop];

let inRight = [coords.left + field.clientLeft + field.clientWidth, coords.top + field.clientTop + field.clientHeight];


let triangle1 = document.querySelector('.triangle-left1');
let triangle2 = document.querySelector('.triangle-left2');
let triangle3 = document.querySelector('.triangle-right1');
let triangle4 = document.querySelector('.triangle-right2');




let onClickable1=()=>{
    alert(`верхний левый, внешний угол - ${leftTop}`);
    console.log(111111)
}
let onClickable2=()=>{
    alert(`верхний левый, внутренний угол-${inLeft}`);
    console.log(111111)
}
let onClickable3=()=>{
    alert(`нижний правый, внешний угол-${bottomRight}`);
    console.log(111111)
}
let onClickable4=()=>{
    alert(`нижний правый, внутренний угол-${inRight}`);
    console.log(111111)
}